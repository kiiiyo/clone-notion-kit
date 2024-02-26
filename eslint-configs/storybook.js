//@ts-check
import { configs as storybookConfigs } from 'eslint-plugin-storybook';

export default {
  plugins: {
    'storybook/recommended': storybookConfigs.recommended,
  },
};
