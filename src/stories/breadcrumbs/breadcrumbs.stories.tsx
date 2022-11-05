import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumbs } from '../../ui/breadcrumbs/breadcrumbs';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = () => <Breadcrumbs />;

export const PrimaryLarge = Template.bind({});


