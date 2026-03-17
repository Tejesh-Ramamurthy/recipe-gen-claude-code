import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Input from "../components/ui/Input";

const MicIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 1a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z"
      stroke="#9A9A9A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 9a5 5 0 0 1-10 0M10 14v5m-3 0h6"
      stroke="#9A9A9A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3ZM15 15l3 3"
      stroke="#9A9A9A"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "40px", background: "#1A1A1A" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

// --- Basic ---

export const Default: Story = {
  args: {
    placeholder: "Enter Quantity",
  },
};

export const WithValue: Story = {
  args: {
    placeholder: "Enter Quantity",
    value: "500g",
  },
};

// --- With Icons ---

export const WithMicIcon: Story = {
  args: {
    placeholder: "Add items",
    hasRightIcon: true,
    rightIcon: <MicIcon />,
  },
};

export const WithSearchIcon: Story = {
  args: {
    placeholder: "Search recipes",
    hasRightIcon: true,
    rightIcon: <SearchIcon />,
  },
};

// --- Disabled ---

export const Disabled: Story = {
  args: {
    placeholder: "Enter Quantity",
    disabled: true,
  },
};

export const DisabledWithIcon: Story = {
  args: {
    placeholder: "Add items",
    hasRightIcon: true,
    rightIcon: <MicIcon />,
    disabled: true,
  },
};

// --- All States Gallery ---

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Input placeholder="Default" />
      <Input placeholder="With mic icon" hasRightIcon rightIcon={<MicIcon />} />
      <Input placeholder="With search icon" hasRightIcon rightIcon={<SearchIcon />} />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="Disabled with icon" hasRightIcon rightIcon={<MicIcon />} disabled />
    </div>
  ),
};
