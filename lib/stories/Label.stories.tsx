import { Meta, StoryObj } from '@storybook/react';
import { Label } from '../components/Label';

// Metadata
const meta: Meta<typeof Label> = {
    title: 'Components/Label',
    component: Label,
    tags: ['autodocs'],
    args: {
        children: 'This is a Label component',
    },
    argTypes: {
        type: {
            control: 'select',
            options: ['title', 'subtitle', 'text'],
            description: 'Defines the type of label based on its semantic importance.',
        },
        tag: {
            control: 'select',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
            description: 'Overrides the semantic element. Use either "type" or "tag", but not both.',
        },
        variant: {
            control: 'select',
            options: ['bits', 'console', 'neon', 'terminal'],
            description: 'Specifies the main style and behavior of the label.',
        },
        role: {
            control: 'select',
            options: ['default', 'primary', 'secondary', 'tertiary', 'warning', 'error'],
            description: 'Changes the color scheme according to severity or role.',
        },
        className: {
            control: false,
        },
        children: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Label>;

// --- Basic Use Cases ---

export const Default: Story = {
    args: {
        variant: 'terminal',
        role: 'default',
        type: 'text',
    },
};

export const TitleLabel: Story = {
    args: {
        variant: 'neon',
        role: 'primary',
        type: 'title',
        children: 'Main Title',
    },
};

export const SubtitleLabel: Story = {
    args: {
        variant: 'console',
        role: 'secondary',
        type: 'subtitle',
        children: 'Subtitle Section',
    },
};

export const TextLabel: Story = {
    args: {
        variant: 'bits',
        role: 'tertiary',
        type: 'text',
        children: 'Paragraph or simple text',
    },
};

export const CustomH3Tag: Story = {
    args: {
        tag: 'h3',
        variant: 'terminal',
        role: 'primary',
        children: 'Custom H3 heading',
    },
};

export const CustomSpanTag: Story = {
    args: {
        tag: 'span',
        variant: 'neon',
        role: 'warning',
        children: 'Span label',
    },
};

export const ErrorVariant: Story = {
    args: {
        variant: 'neon',
        role: 'error',
        type: 'title',
        children: 'Error Title Example',
    },
};
