import { strings } from '@angular-devkit/core';
import {
  MergeStrategy,
  Rule,
  SchematicContext,
  SchematicsException,
  Tree,
  apply,
  branchAndMerge,
  chain,
  filter,
  mergeWith,
  move,
  noop,
  template,
  url
} from '@angular-devkit/schematics';
import {
  addExportToModule,
  addImportToModule,
  insertAfterLastOccurrence
} from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange } from '@schematics/angular/utility/change';
import { getWorkspace } from '@schematics/angular/utility/config';
import { buildRelativePath } from '@schematics/angular/utility/find-module';
import { applyLintFix } from '@schematics/angular/utility/lint-fix';
import { parseName } from '@schematics/angular/utility/parse-name';
import {
  buildDefaultPath,
  getProject
} from '@schematics/angular/utility/project';
import * as ts from 'typescript';
import { Schema } from './schema';

export default function(options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const defaultOptions = {
      project: 'shared-mjaox-ui',
      flat: false,
      spec: true,
      lintFix: true
    } as Schema;

    const mergedOptions = {
      ...defaultOptions,
      ...options
    };

    const workspace = getWorkspace(host);
    const projectName = mergedOptions.project
      ? mergedOptions.project
      : Object.keys(workspace.projects)[0];
    const project = getProject(host, projectName);

    if (mergedOptions.path === undefined) {
      mergedOptions.path = buildDefaultPath(project);
    }

    const parsedPath = parseName(mergedOptions.path, mergedOptions.name);
    mergedOptions.name = parsedPath.name;
    mergedOptions.path = parsedPath.path;

    const templateSource = apply(url('./files'), [
      mergedOptions.spec ? noop() : filter(path => !path.endsWith('.spec.ts')),
      template({
        ...strings,
        'if-flat': (s: string) => (mergedOptions.flat ? '' : s),
        ...mergedOptions
      }),
      move(parsedPath.path)
    ]);

    return chain([
      branchAndMerge(
        chain([
          addToBaseModule(mergedOptions),
          mergeWith(templateSource, MergeStrategy.Default)
        ])
      ),
      mergedOptions.lintFix ? applyLintFix(mergedOptions.path) : noop()
    ])(host, context);
  };
}

function addToBaseModule(options: Schema): Rule {
  return (host: Tree) => {
    const componentModulePath =
      `${options.path}/` +
      (options.flat ? '' : strings.dasherize(options.name) + '/');
    const indexPath = `${options.path}/../index.ts`;
    const indexSource = readIntoSourceFile(host, indexPath);

    const relativeIndexPath = buildRelativePath(indexPath, componentModulePath);

    const classifiedName = strings.classify(
      `SharedAfUi${strings.classify(options.name)}Module`
    );

    const indexUpdateRecorder = host.beginUpdate(indexPath);

    const addToIndex = addExportToIndex(
      indexSource,
      indexPath,
      classifiedName,
      relativeIndexPath
    );
    for (const change of addToIndex) {
      if (change instanceof InsertChange) {
        indexUpdateRecorder.insertLeft(change.pos, change.toAdd);
      }
    }

    host.commitUpdate(indexUpdateRecorder);

    return host;
  };
}

function addExportToIndex(
  source: ts.SourceFile,
  modulePath: string,
  symbolName: string,
  importPath: string
): Change[] {
  return [insertExport(source, modulePath, symbolName, importPath)];
}

/**
 * Add export `export { symbolName } from fileName` if the export doesn't exit
 * already. Assumes fileToEdit can be resolved and accessed.
 * @param fileToEdit (file we want to add export to)
 * @param symbolName (item to export)
 * @param fileName (path to the file)
 * @param isDefault (if true, export follows style for exporting default exports)
 * @return Change
 */
export function insertExport(
  source: ts.SourceFile,
  fileToEdit: string,
  symbolName: string,
  fileName: string
): Change {
  const rootNode = source;
  const allExports = findNodes(rootNode, ts.SyntaxKind.ExportDeclaration);

  // no such import declaration exists
  const useStrict = findNodes(rootNode, ts.SyntaxKind.StringLiteral).filter(
    (n: ts.StringLiteral) => n.text === 'use strict'
  );
  let fallbackPosition = 0;
  if (useStrict.length > 0) {
    fallbackPosition = useStrict[0].end;
  }
  // if there are no exports or 'use strict' statement, insert export at beginning of file
  const insertAtBeginning = allExports.length === 0 && useStrict.length === 0;
  const separator = insertAtBeginning ? '' : ';\n';
  const toInsert =
    `${separator}export *` +
    ` from '${fileName}'${insertAtBeginning ? ';\n' : ''}`;

  return insertAfterLastOccurrence(
    allExports,
    toInsert,
    fileToEdit,
    fallbackPosition,
    ts.SyntaxKind.StringLiteral
  );
}

/**
 * Find all nodes from the AST in the subtree of node of SyntaxKind kind.
 * @param node
 * @param kind
 * @param max The maximum number of items to return.
 * @return all nodes of kind, or [] if none is found
 */
export function findNodes(
  node: ts.Node,
  kind: ts.SyntaxKind,
  max = Infinity
): ts.Node[] {
  if (!node || max === 0) {
    return [];
  }

  const arr: ts.Node[] = [];
  if (node.kind === kind) {
    arr.push(node);
    max--;
  }
  if (max > 0) {
    for (const child of node.getChildren()) {
      findNodes(child, kind, max).forEach(childNode => {
        if (max > 0) {
          arr.push(childNode);
        }
        max--;
      });

      if (max <= 0) {
        break;
      }
    }
  }

  return arr;
}

function readIntoSourceFile(host: Tree, modulePath: string): ts.SourceFile {
  const text = host.read(modulePath);
  if (text === null) {
    throw new SchematicsException(`File ${modulePath} does not exist.`);
  }
  const sourceText = text.toString('utf-8');

  return ts.createSourceFile(
    modulePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true
  );
}
