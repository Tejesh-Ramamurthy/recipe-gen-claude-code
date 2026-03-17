import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Checkbox from "../components/ui/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "40px", background: "#F5F5F5" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    onChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onChange={setChecked} />;
  },
};
