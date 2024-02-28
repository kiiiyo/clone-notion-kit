import { Meta, StoryObj } from '@storybook/react';

import { HomePage } from './home-page.component';

type Story = StoryObj<typeof HomePage>;

export default {
  component: HomePage,
  title: 'Feature/Home/HomePage',
} as Meta<typeof HomePage>;

export const Default: Story = {
  args: {
    isLoading: false,
    isAuthenticated: false,
  },
};
