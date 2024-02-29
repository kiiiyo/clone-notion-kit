import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)',
    '../src/features/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      // NOTE: This is a workaround for  `@` alias tsconfig paths
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src/'),
      };
    }
    return config;
  },
};
export default config;
