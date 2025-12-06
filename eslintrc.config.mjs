export default {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', 'eslintrc.config.mjs', '**/node_modules/**'],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/no-duplicates': 'warn',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
        'ts-expect-error': 'allow-with-description',
      },
    ],
  },
};
