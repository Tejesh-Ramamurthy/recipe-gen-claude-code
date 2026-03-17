"use client";

import { forwardRef } from "react";
import Checkbox from "./Checkbox";
import {
  styles,
  variantConfig,
  type IngredientRowVariant,
} from "./ingredientRowStyles";

export interface IngredientRowProps {
  name: string;
  quantity: string;

  checked?: boolean;
  onCheckChange?: (checked: boolean) => void;

  variant?: IngredientRowVariant;

  expiryText?: string;
  showCTA?: boolean;
  onCTAClick?: () => void;

  replacementText?: string;

  className?: string;
}

const IngredientRow = forwardRef<HTMLDivElement, IngredientRowProps>(
  function IngredientRow(
    {
      name,
      quantity,
      checked = false,
      onCheckChange,
      variant = "default",
      expiryText,
      showCTA,
      onCTAClick,
      replacementText,
      className,
    },
    ref
  ) {
    const config = variantConfig[variant];

    return (
      <div
        ref={ref}
        style={styles.container}
        className={className}
      >
        <div style={styles.leftSection}>
          <Checkbox
            checked={checked}
            onChange={(val) => onCheckChange?.(val)}
          />

          <div style={styles.contentBlock}>
            <NameSection name={name} nameStyle={config.nameStyle} />

            {config.showExpiryText && expiryText && (
              <span style={config.secondaryTextStyle}>{expiryText}</span>
            )}

            {config.showCTA && showCTA && (
              <button
                type="button"
                style={styles.ctaButton}
                onClick={onCTAClick}
              >
                View Recipe for this ingredient
              </button>
            )}

            {config.showReplacementText && replacementText && (
              <span style={config.secondaryTextStyle}>{replacementText}</span>
            )}
          </div>
        </div>

        <span style={styles.quantity}>{quantity}</span>
      </div>
    );
  }
);

function NameSection({
  name,
  nameStyle,
}: {
  name: string;
  nameStyle: React.CSSProperties;
}) {
  return <span style={{ ...styles.name, ...nameStyle }}>{name}</span>;
}

export default IngredientRow;
