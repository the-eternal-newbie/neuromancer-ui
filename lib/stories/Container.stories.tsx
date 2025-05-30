import { Meta, StoryObj } from '@storybook/react';
import { Container } from '../components/Container';
import { Label } from '../components/Label';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  args: {
    children: (
      <Label type="text" variant="terminal" role="default">
        This is a Container component
      </Label>
    ),
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['generic', 'section', 'article'],
      description: 'Defines the container type. Provides basic semantic meaning.',
    },
    tag: {
      control: 'select',
      options: ['div', 'section', 'article', 'header', 'footer', 'nav', 'main', 'aside'],
      description: 'Overrides the semantic element. Use either "type" or "tag", but not both.',
    },
    variant: {
      control: 'select',
      options: ['neon', 'target', 'bracket', 'rplcnt', 'ghost'],
      description: 'Specifies the main style and behavior of the container.',
    },
    role: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'tertiary', 'warning', 'error'],
      description: 'Changes the color scheme according to severity or role.',
    },
    backgroundType: {
      control: 'select',
      options: ['solid', 'glass', 'blurred'],
      description: 'Changes the background styling.',
    },
    className: {
      control: false,
    },
    children: {
      control: false, // we manually render Label inside
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

// Helper: auto create Label matching the container props
const renderLabel = (text: string, variant: string, role: string) => (
  <Label type="text" variant={variant as any} role={role as any}>
    {text}
  </Label>
);

// --- Basic Use Cases ---

export const Default: Story = {
  args: {
    variant: 'ghost',
    backgroundType: 'solid',
    role: 'default',
    type: 'generic',
    children: renderLabel('Default Ghost Container', 'terminal', 'default'),
  },
};

export const NeonVariant: Story = {
  args: {
    variant: 'neon',
    backgroundType: 'glass',
    role: 'primary',
    type: 'section',
    children: renderLabel('Neon Glowing Container', 'neon', 'primary'),
  },
};

export const TargetVariant: Story = {
  args: {
    variant: 'target',
    backgroundType: 'solid',
    role: 'secondary',
    type: 'article',
    children: renderLabel('Target Style Container', 'console', 'secondary'),
  },
};

export const BracketVariant: Story = {
  args: {
    variant: 'bracket',
    backgroundType: 'glass',
    role: 'tertiary',
    tag: 'aside',
    children: renderLabel('Bracket Corner Container', 'bits', 'tertiary'),
  },
};

export const ReplicantVariant: Story = {
  args: {
    variant: 'rplcnt',
    backgroundType: 'solid',
    role: 'warning',
    type: 'generic',
    children: renderLabel('Replicant Solid Container', 'terminal', 'warning'),
  },
};

export const GhostVariant: Story = {
  args: {
    variant: 'ghost',
    backgroundType: 'glass',
    role: 'error',
    type: 'section',
    children: renderLabel('Ghost Style Container', 'neon', 'error'),
  },
};

// --- Semantic Tags Showcase ---

export const UsingHeaderTag: Story = {
  args: {
    tag: 'header',
    variant: 'bracket',
    backgroundType: 'solid',
    role: 'primary',
    children: renderLabel('Header Container', 'neon', 'primary'),
  },
};

export const UsingFooterTag: Story = {
  args: {
    tag: 'footer',
    variant: 'target',
    backgroundType: 'solid',
    role: 'secondary',
    children: renderLabel('Footer Container', 'console', 'secondary'),
  },
};

export const UsingNavTag: Story = {
  args: {
    tag: 'nav',
    variant: 'neon',
    backgroundType: 'glass',
    role: 'tertiary',
    children: renderLabel('Navigation Container', 'bits', 'tertiary'),
  },
};
