import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spinner } from '../../ui/spinner';

export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const Default: ComponentStory<typeof Spinner> = () => <Spinner />;
