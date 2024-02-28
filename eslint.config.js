import js from '@eslint/js';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

import nextConfig from './eslint-configs/next.js';
import reactHooksConfig from './eslint-configs/react-hooks.js';
import reactConfig from './eslint-configs/react.js';
import storybookConfig from './eslint-configs/storybook.js';
import importConfig from './eslint-configs/import.js';
import typescriptConfig from './eslint-configs/typescript.js';

export default [
  {
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2022,
        project: ['./**/tsconfig.json'],
      },
    },
  },

  /* Ignores */
  {
    ignores: ['.next/*', '.trunk/*', '.storybook/*', '**/*.config.*', 'eslint-configs/*'],
  },

  /* Basic Rules */
  {
    rules: {
      'no-unused-vars': ['off'],
    },
  },

  js.configs.recommended,

  /* Typescript */
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...typescriptConfig,
  },

  /* Import */
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.mjs'],
    ...importConfig,
  },

  /* React */
  {
    files: ['**/*.tsx', '**/*.ts'],
    ...reactConfig,
  },

  /* React Hooks */
  {
    files: ['**/*.tsx', '**/*.ts'],
    ...reactHooksConfig,
  },

  /* Next.js */
  {
    files: ['**/*.tsx', '**/*.ts'],
    ...nextConfig,
  },

  /* Storybook */
  {
    files: ['**/*.stories.tsx'],
    ...storybookConfig,
  },

  /* Prettier */
  eslintConfigPrettier,
];
