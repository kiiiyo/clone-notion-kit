import importPlugin from 'eslint-plugin-import';
import unusedImportPlugin from 'eslint-plugin-unused-imports';

export default {
  plugins: {
    import: importPlugin,
    'unused-imports': unusedImportPlugin,
  },

  rules: {
    ...importPlugin.configs.recommended.rules,
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'object', 'type', 'index'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        // TODO: Later setup
        // pathGroups: [],
      },
    ],
  },
};
