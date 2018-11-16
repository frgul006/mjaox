export class Link {
  title: string;
  url: string;
  description: string;

  static mockOne() {
    return {
      title: 'nrwl.io/nx/workspace-specific-schematics',
      url: 'https://nrwl.io/nx/workspace-specific-schematics',
      description: 'The official documentation for nx workspace schematics'
    } as Link;
  }
}
