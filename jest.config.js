module.exports = {
  roots: ['<rootDir>/__tests'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  testEnvironment: 'node',
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  // collectCoverage: true,

  // // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: ['src/**/*.{ts,tsx}'],

  // // The directory where Jest should output its coverage files
  // coverageDirectory: 'coverage',

  // // An array of regexp pattern strings used to skip coverage collection
  // coveragePathIgnorePatterns: ['/node_modules/'],

  // // A list of reporter names that Jest uses when writing coverage reports
  // coverageReporters: ['json', 'text', 'lcov', 'clover', 'html'],
};
