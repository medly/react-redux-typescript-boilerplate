const { configure } = require('@medly/jest-config-react');

module.exports = configure({
    rootDir: './',
    collectCoverageFrom: ['!<rootDir>/src/utils/fetch.ts']
});
