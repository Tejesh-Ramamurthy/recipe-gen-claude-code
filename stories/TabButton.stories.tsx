import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within } from "storybook/test";
import TabButton from "../components/ui/TabButton";

const meta: Meta<typeof TabButton> = {
  title: "UI/TabButton",
  component: TabButton,
  tags: ["autodocs"],
  args: {
    onClick: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof TabButton>;

export const Unselected: Story = {
  args: {
    label: "Genie",
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    label: "Genie",
    isSelected: true,
  },
};

export const HoverUnselected: Story = {
  args: {
    label: "Genie",
    isSelected: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.hover(button);
  },
};

export const Pressed: Story = {
  args: {
    label: "Genie",
    isSelected: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.pointer({ keys: "[MouseLeft>]", target: button });
  },
};

export const TabBar: Story = {
  args: {
    label: "Genie",
    isSelected: true,
  },
  render: () => (
    <div className="flex flex-row items-center gap-[10px]">
      <TabButton label="Genie" isSelected={true} onClick={() => {}} />
      <TabButton label="Pantry" isSelected={false} onClick={() => {}} />
      <TabButton label="Shopping List" isSelected={false} onClick={() => {}} />
    </div>
  ),
};
