import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NavBar from "../components/layout/NavBar";

const meta: Meta<typeof NavBar> = {
  title: "Layout/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  args: {
    onTabChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const GenieSelected: Story = {
  args: {
    activeTab: "genie",
  },
};

export const PantrySelected: Story = {
  args: {
    activeTab: "pantry",
  },
};

export const ShoppingListSelected: Story = {
  args: {
    activeTab: "shopping-list",
  },
};
