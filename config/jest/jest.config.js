module.exports = {
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    collectCoverageFrom: [
        '<rootDir>/src/**/*.(ts|tsx)',
        '!<rootDir>/**/index.(ts|tsx)',
        '!<rootDir>/src/App.tsx',
        '!<rootDir>/src/theme/**',
        '!<rootDir>/src/icons/**',
        '!<rootDir>/src/store/sagas.ts',
        '!<rootDir>/src/utils/styled.ts',
        '!<rootDir>/node_modules/**',
        '!<rootDir>/src/**/types.(ts|tsx)',
        '!<rootDir>/src/**/types/**',
        '!<rootDir>/src/utils/fetch.ts',
        '!<rootDir>/src/utils/test-utils.tsx'
    ],
    coverageDirectory: '<rootDir>/coverage/',
    moduleFileExtensions: ['.mjs', 'ts', 'tsx', 'js', 'jsx', 'svg'],
    roots: ['<rootDir>/src/'],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupAfterEnv.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/*.(spec|test).(ts|tsx)'],
    verbose: true,
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/config/jest/__mocks__/styleMock.js',
        '^@styled': '<rootDir>/src/utils/styled',
        '^@store(.*)$': '<rootDir>/src/store$1',
        '^@test-utils': '<rootDir>/src/utils/test-utils',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@theme(.*)$': '<rootDir>/src/theme$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1'
    }
};
