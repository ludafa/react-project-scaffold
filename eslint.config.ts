/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { default as fs } from 'node:fs';
import { default as path } from 'node:path';

import { parse } from 'comment-json';
// @ts-expect-error
import importPlugin from 'eslint-plugin-import';
import { default as prettier } from 'eslint-plugin-prettier/recommended';
import { default as reactPlugin } from 'eslint-plugin-react';
// @ts-expect-error
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint, { configs as tseslintConfigs } from 'typescript-eslint';
import js from '@eslint/js';
import unocss from '@unocss/eslint-config/flat';

/* eslint-disable @typescript-eslint/no-explicit-any */
const pkgConfig = parse(
  fs.readFileSync(path.join(import.meta.dirname, 'tsconfig.app.json'), 'utf8'),
) as any;
/* enable-disable @typescript-eslint/no-explicit-any */

const aliases = Object.keys(
  pkgConfig.compilerOptions.paths as Record<string, string[]>,
)
  .map((key) => {
    return key.split('/')[0];
  })
  // handle special case @
  .filter((key) => key !== '@')
  .join('|');

export default tseslint.config(
  {
    ignores: ['dist', '.history', 'node_modules', 'public'],
  },
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  prettier,
  {
    extends: [
      js.configs.recommended,
      ...tseslintConfigs.recommendedTypeChecked,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      unocss,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: [path.join(import.meta.dirname, 'tsconfig.app.json')],
        },
      },
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/ban-ts-comment': 0,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
      'import/no-unresolved': [
        'error',
        {
          ignore: ['^virtual:'],
        },
      ],
      'import/no-default-export': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side effect imports
            ['^\\u0000'],
            // Node.js builtins prefixed with `node:`.
            ['^node:'],
            // Packages.
            ['^\\w', '^@\\w'],
            // Internal packages defined in `tsconfig.app.json`.
            [`^(${aliases})`, '^@\\/?'],
            // Parent imports. Put `..` last.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports. Put same-folder imports and `.` last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports.
            ['\\.css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
    },
  },
);
