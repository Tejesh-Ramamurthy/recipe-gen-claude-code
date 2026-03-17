import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Stepper from "../components/ui/Stepper";

const meta: Meta<typeof Stepper> = {
  title: "UI/Stepper",
  component: Stepper,
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
type Story = StoryObj<typeof Stepper>;

// --- Basic ---

export const Default: Story = {
  args: {
    value: 1,
  },
};

export const WithMinMax: Story = {
  args: {
    value: 5,
    min: 1,
    max: 10,
  },
};

export const AtMinimum: Story = {
  args: {
    value: 1,
    min: 1,
    max: 10,
  },
};

export const AtMaximum: Story = {
  args: {
    value: 10,
    min: 1,
    max: 10,
  },
};

// --- Step Sizes ---

export const StepByTwo: Story = {
  args: {
    value: 4,
    min: 1,
    max: 20,
    step: 2,
  },
};

// --- Disabled ---

export const Disabled: Story = {
  args: {
    value: 3,
    disabled: true,
  },
};

// --- Interactive ---

const InteractiveTemplate = () => {
  const [value, setValue] = useState(1);
  return <Stepper value={value} onChange={setValue} min={1} max={10} />;
};

export const Interactive: Story = {
  render: () => <InteractiveTemplate />,
};

// --- All Variants Gallery ---

const GalleryTemplate = () => {
  const [val1, setVal1] = useState(1);
  const [val2, setVal2] = useState(5);
  const [val3, setVal3] = useState(1);
  const [val4, setVal4] = useState(10);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div>
        <span style={{ color: "#9A9A9A", fontSize: 12, marginBottom: 4, display: "block" }}>
          Default (min: 1)
        </span>
        <Stepper value={val1} onChange={setVal1} />
      </div>
      <div>
        <span style={{ color: "#9A9A9A", fontSize: 12, marginBottom: 4, display: "block" }}>
          Min: 1, Max: 10
        </span>
        <Stepper value={val2} onChange={setVal2} min={1} max={10} />
      </div>
      <div>
        <span style={{ color: "#9A9A9A", fontSize: 12, marginBottom: 4, display: "block" }}>
          At minimum (1)
        </span>
        <Stepper value={val3} onChange={setVal3} min={1} max={10} />
      </div>
      <div>
        <span style={{ color: "#9A9A9A", fontSize: 12, marginBottom: 4, display: "block" }}>
          At maximum (10)
        </span>
        <Stepper value={val4} onChange={setVal4} min={1} max={10} />
      </div>
      <div>
        <span style={{ color: "#9A9A9A", fontSize: 12, marginBottom: 4, display: "block" }}>
          Disabled
        </span>
        <Stepper value={3} onChange={() => {}} disabled />
      </div>
    </div>
  );
};

export const AllVariants: Story = {
  render: () => <GalleryTemplate />,
};
