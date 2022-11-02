import { ComponentStory } from '@storybook/react';
import { ImagePreview } from './ImagePreview';

export default {
  title: 'ImagePreview',
  component: ImagePreview,
  argTypes: {
    url: {
      type: 'string',
      description: 'Ссылка на изображение',
    },
    title: {
      type: 'string',
      description: 'alt для изображения'
    }
  }
}

const Template: ComponentStory<typeof ImagePreview> = (args) => <ImagePreview {...args} />

export const Default = Template.bind({});
Default.args = {
  url: 'https://showgamer.com/storage/uploads/news/2021-09-09/fgGTjdOiJS821g9w7Sakmi9SDuNQ9iXwLUW0VcBj.jpg',
  title: 'Закат',
};