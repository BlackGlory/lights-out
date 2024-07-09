import js from '@eslint/js'
import ts from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default ts.config(
  js.configs.recommended
, ...ts.configs.recommended
, {
    plugins: {
      react
    , reactHooks
    }
  , rules: {
      'no-useless-escape': 'off'
    , 'no-var': 'off'
    , '@typescript-eslint/no-inferrable-types': 'off'
    , '@typescript-eslint/no-var-requires': 'off'
    , '@typescript-eslint/explicit-module-boundary-types': 'off'
    , '@typescript-eslint/no-empty-interface': 'off'
    , '@typescript-eslint/no-explicit-any': 'off'
    }
  }
)
