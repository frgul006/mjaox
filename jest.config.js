module.exports = {
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: '<rootDir>/jest/setupJest.ts',
  testMatch: [
    '**/+(*.)+(spec|test).+(ts|js)?(x)',
    '!**/*-e2e/**',
    '!**/schematics/**/files/**'
  ],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular/preprocessor.js',
    '^.+\\.js$': 'babel-jest'
  },
  globals: {
    __TS_CONFIG__: {
      target: 'es6',
      module: 'commonjs',
      modeResolution: 'node'
    },
    'ts-jest': {
      tsConfigFile: 'tsconfig.spec.json'
    },
    __TRANSFORM_HTML__: true,
    testResultsProcessor: './node_modules/jest-html-reporter'
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  resolver: '@nrwl/builders/plugins/jest/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageReporters: ['html']
};
