import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "../components/ui/Button";

const PlaceholderIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 3v10M3 8h10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowRightIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8h10m-4-4 4 4-4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRightIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m6 4 4 4-4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "40px", background: "#1A1A1A" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    onClick: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// --- Variants ---

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Continue",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Cancel",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Learn more",
  },
};

// --- Sizes ---

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Small",
  },
};

export const Medium: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Medium",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Large",
  },
};

// --- Icons ---

export const WithLeftIcon: Story = {
  args: {
    variant: "secondary",
    size: "large",
    leftIcon: <ArrowRightIcon />,
    children: "Next",
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: "tertiary",
    size: "small",
    rightIcon: <ChevronRightIcon />,
    children: "Learn more",
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: "primary",
    leftIcon: <PlaceholderIcon />,
    rightIcon: <ArrowRightIcon />,
    children: "Continue",
  },
};

// --- Icon Only ---

export const IconOnlyPrimary: Story = {
  args: {
    variant: "primary",
    iconOnly: true,
    leftIcon: <PlaceholderIcon />,
  },
};

export const IconOnlySecondary: Story = {
  args: {
    variant: "secondary",
    iconOnly: true,
    leftIcon: <PlaceholderIcon />,
  },
};

export const IconOnlyTertiary: Story = {
  args: {
    variant: "tertiary",
    iconOnly: true,
    leftIcon: <PlaceholderIcon />,
  },
};

// --- Disabled ---

export const DisabledPrimary: Story = {
  args: {
    variant: "primary",
    disabled: true,
    children: "Disabled",
  },
};

export const DisabledSecondary: Story = {
  args: {
    variant: "secondary",
    disabled: true,
    children: "Disabled",
  },
};

// --- All Variants Gallery ---

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Button variant="primary" size="small">Small</Button>
        <Button variant="primary" size="medium">Medium</Button>
        <Button variant="primary" size="large">Large</Button>
        <Button variant="primary" iconOnly leftIcon={<PlaceholderIcon />} />
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Button variant="secondary" size="small">Small</Button>
        <Button variant="secondary" size="medium">Medium</Button>
        <Button variant="secondary" size="large">Large</Button>
        <Button variant="secondary" iconOnly leftIcon={<PlaceholderIcon />} />
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Button variant="tertiary" size="small">Small</Button>
        <Button variant="tertiary" size="medium">Medium</Button>
        <Button variant="tertiary" size="large">Large</Button>
        <Button variant="tertiary" iconOnly leftIcon={<PlaceholderIcon />} />
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Button variant="primary" leftIcon={<ArrowRightIcon />}>With Icon</Button>
        <Button variant="secondary" rightIcon={<ChevronRightIcon />}>With Icon</Button>
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="secondary" disabled>Disabled</Button>
      </div>
    </div>
  ),
};
