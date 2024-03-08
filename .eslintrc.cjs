module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@stylistic'],
  settings: {
    react: {
      version: 'detect',
    }
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-pascal-case': [2, { allowAllCaps: false, allowNamespace: true, allowLeadingUnderscore: true }],
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/array-element-newline': ['error', { 'multiline': true, 'minItems': 5 }],
    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
    '@stylistic/no-trailing-spaces': ['error'],
    '@stylistic/type-annotation-spacing': ['error'],
    '@stylistic/type-generic-spacing': ['error'],
    '@stylistic/object-curly-newline': ['error', { 'multiline': true }], 
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  },
}
