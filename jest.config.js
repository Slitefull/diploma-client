module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
  ],
  moduleDirectories: [
    'node_modules/',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'node',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  roots: [
    '<rootDir>/src',
  ],
  testLocationInResults: true,
  testMatch: [
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  transformIgnorePatterns: [
    'node_modules',
  ],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  verbose: true,
  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  globals: {
    DEBUG_LOG: true,
    BACKEND_WEBSOCKET: 'for test',
    ORIGIN_DOMAIN_WHITELIST: 'for test',
  },
  moduleNameMapper: {
    '^@api(.*)$': '<rootDir>/src/api$1',
    '^@images(.*)$': '<rootDir>/src/images$1',
    '^@helpers(.*)$': '<rootDir>/src/helpers$1',
    '^@locales(.*)$': '<rootDir>/src/locales$1',
    '^@root(.*)$': '<rootDir>/src$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@static(.*)$': '<rootDir>/src/static$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
  },
};
