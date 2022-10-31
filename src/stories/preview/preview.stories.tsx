import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Preview } from './preview';

export default {
  title: 'Preview',
  component: Preview,
  
} as ComponentMeta<typeof Preview>;

export const Default: ComponentStory<typeof Preview> = () => <Preview />;
