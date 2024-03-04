import { Meta, StoryObj } from '@storybook/react';

import { DocumentRootPage } from './document-root-page.component';

type Story = StoryObj<typeof DocumentRootPage>;

export default {
  component: DocumentRootPage,
  title: 'Feature/Document/DocumentRootPage',
} as Meta<typeof DocumentRootPage>;

export const Default: Story = {};
