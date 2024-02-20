import js from '@eslint/js';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

import nextConfig from './eslint-rules/next.js';
import reactHooksConfig from './eslint-rules/react-hooks.js';
import reactConfig from './eslint-rules/react.js';

export default [
  {
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: ['./**/tsconfig.json'],
      },
    },
  },

  /* ignores */
  {
    ignores: ['.next/*', '.trunk/*', '.eslintrc.cjs', '**/*.config.*', 'eslint-rules/*'],
  },

  js.configs.recommended,

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

  /* prettier */
  eslintConfigPrettier,
];