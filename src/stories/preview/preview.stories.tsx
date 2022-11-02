import type { ComponentStory, ComponentMeta } from '@storybook/react';
import imageDefault from './image5.jpg';

import { Preview } from './preview';

export default {
  title: 'Preview',
  component: Preview,
  argTypes: {
    image: {
      description: 'Cсылка на фото',
      defaultValue: imageDefault,
    },
  },
} as ComponentMeta<typeof Preview>;

export const Default: ComponentStory<typeof Preview> = (args) => <Preview {...args} />;
