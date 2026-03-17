import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useArgs } from "storybook/preview-api";
import Select from "../components/ui/Select";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "120px 40px 40px", background: "#1A1A1A" }}>
        <Story />
      </div>
    ),
  ],
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return (
      <Select
        {...args}
        onChange={(val: string) => {
          args.onChange?.(val);
          updateArgs({ value: val });
        }}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// --- Default ---

export const Default: Story = {
  args: {
    value: "kg",
  },
};

// --- Interactive ---

const InteractiveTemplate = () => {
  const [value, setValue] = useState("kg");
  return <Select value={value} onChange={setValue} />;
};

export const Interactive: Story = {
  render: () => <InteractiveTemplate />,
};

// --- Custom Options ---

export const CustomOptions: Story = {
  args: {
    value: "cups",
    options: [
      { label: "Cups", value: "cups" },
      { label: "Tablespoons", value: "tbsp" },
      { label: "Teaspoons", value: "tsp" },
    ],
  },
};

// --- Disabled ---

export const Disabled: Story = {
  args: {
    value: "g",
    disabled: true,
  },
};

// --- No Selection ---

export const NoSelection: Story = {
  args: {
    value: "",
    placeholder: "Unit",
  },
};
