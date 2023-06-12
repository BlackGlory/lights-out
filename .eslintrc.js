module.exports = {
  root: true
, parser: '@typescript-eslint/parser'
, env: {
    commonjs: true
  }
, plugins: [
    '@typescript-eslint'
  , 'react'
  , 'react-hooks'
  ]
, extends: [
    'eslint:recommended'
  , 'plugin:@typescript-eslint/recommended'
  , 'plugin:react/recommended'
  , 'plugin:react/jsx-runtime'
  , 'plugin:react-hooks/recommended'
  ]
, rules: {
    'no-useless-escape': 'off'
  , 'no-var': 'off'
  , '@typescript-eslint/no-inferrable-types': 'off'
  , '@typescript-eslint/no-var-requires': 'off'
  , '@typescript-eslint/explicit-module-boundary-types': 'off'
  , '@typescript-eslint/no-empty-interface': 'off'
  }
, settings: {
    react: {
      'version': 'detect'
    }
  }
}
