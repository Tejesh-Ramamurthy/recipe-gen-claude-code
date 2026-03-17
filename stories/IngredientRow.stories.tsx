import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import IngredientRow from "../components/ui/IngredientRow";

const meta: Meta<typeof IngredientRow> = {
  title: "UI/IngredientRow",
  component: IngredientRow,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "40px", background: "#212121", maxWidth: "420px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    onCheckChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof IngredientRow>;

export const Default: Story = {
  args: {
    name: "Rice",
    quantity: "5 kg",
  },
};

export const Expiring: Story = {
  args: {
    name: "Tomatoes",
    quantity: "5 kg",
    variant: "expiring",
    expiryText: "Expiring in 2 days",
    showCTA: true,
  },
};

export const Replaced: Story = {
  args: {
    name: "Milk",
    quantity: "1 nos",
    variant: "replaced",
    replacementText: "You can replace it with 1/2 soy or almond milk",
  },
};

export const CheckedDefault: Story = {
  args: {
    name: "Rice",
    quantity: "5 kg",
    checked: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <IngredientRow
        name="Tomatoes"
        quantity="5 kg"
        variant="expiring"
        expiryText="Expiring in 2 days"
        showCTA
        checked={checked}
        onCheckChange={setChecked}
        onCTAClick={() => alert("CTA clicked!")}
      />
    );
  },
};
