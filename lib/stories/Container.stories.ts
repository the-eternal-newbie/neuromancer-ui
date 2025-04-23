import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../components/Container';

const meta = {
	title: 'Example/Container',
	component: Container,
	tags: ['base']
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		className: 'primary',
		children: 'Container'
	}
};
