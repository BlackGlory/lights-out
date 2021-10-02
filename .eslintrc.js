module.exports = {
  root: true
, parser: '@typescript-eslint/parser'
, env: {
    commonjs: true
  }
, plugins: [
    '@typescript-eslint'
  ]
, extends: [
    'eslint:recommended'
  , 'plugin:@typescript-eslint/recommended'
  ]
, rules: {
    'no-useless-escape': 'off'
  , 'no-var': 'off'
  , '@typescript-eslint/no-inferrable-types': 'off'
  , '@typescript-eslint/no-var-requires': 'off'
  , '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
}
