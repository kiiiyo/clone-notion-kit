import { Meta, StoryObj } from '@storybook/react';

import { Sample } from './index';

type Story = StoryObj<typeof Sample>;

export default {
  component: Sample,
  title: 'Components/Sample',
} as Meta<typeof Sample>;

export const Default: Story = {};
