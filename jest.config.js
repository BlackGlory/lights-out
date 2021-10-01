const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  preset: 'react-native'
, globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  }
, testMatch: ['**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)']
, moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  })
  // hack https://github.com/facebook/jest/issues/2070
, modulePathIgnorePatterns: ["<rootDir>/.*/__mocks__"]
, transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  }
, moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
