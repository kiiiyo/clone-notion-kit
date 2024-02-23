//@ts-check
import react from 'eslint-plugin-react';

export default {
  plugins: {
    react,
  },

  rules: {
    ...react.configs['jsx-runtime'].rules,
  },
};
