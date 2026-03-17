import React, { forwardRef, useState, useCallback } from "react";
import {
  containerStyles,
  buttonStyles,
  valueStyles,
  stateStyles,
} from "./stepperStyles";

export interface StepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
}

type ButtonInteraction = "idle" | "hover" | "active";

function useButtonInteraction(disabled: boolean) {
  const [state, setState] = useState<ButtonInteraction>("idle");

  const handlers = {
    onMouseEnter: () => !disabled && setState("hover"),
    onMouseLeave: () => setState("idle"),
    onMouseDown: () => !disabled && setState("active"),
    onMouseUp: () => !disabled && setState("hover"),
  };

  const style: React.CSSProperties = {
    ...buttonStyles,
    ...(state === "hover" ? stateStyles.hover : undefined),
    ...(state === "active" ? stateStyles.active : undefined),
    ...(disabled ? stateStyles.disabled : undefined),
  };

  return { handlers, style };
}

const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      value,
      onChange,
      min = 1,
      max,
      step = 1,
      disabled = false,
      className,
    },
    ref
  ) => {
    const isDecrementDisabled = disabled || value <= min;
    const isIncrementDisabled = disabled || (max !== undefined && value >= max);

    const decrement = useButtonInteraction(isDecrementDisabled);
    const increment = useButtonInteraction(isIncrementDisabled);

    const handleDecrement = useCallback(() => {
      if (isDecrementDisabled) return;
      const newValue = value - step;
      onChange(Math.max(newValue, min));
    }, [value, step, min, isDecrementDisabled, onChange]);

    const handleIncrement = useCallback(() => {
      if (isIncrementDisabled) return;
      const newValue = value + step;
      onChange(max !== undefined ? Math.min(newValue, max) : newValue);
    }, [value, step, max, isIncrementDisabled, onChange]);

    return (
      <div ref={ref} style={containerStyles} className={className}>
        <button
          type="button"
          style={increment.style}
          disabled={isIncrementDisabled}
          onClick={handleIncrement}
          aria-label="Increase value"
          {...increment.handlers}
        >
          +
        </button>

        <span style={valueStyles}>{value}</span>

        <button
          type="button"
          style={decrement.style}
          disabled={isDecrementDisabled}
          onClick={handleDecrement}
          aria-label="Decrease value"
          {...decrement.handlers}
        >
          −
        </button>
      </div>
    );
  }
);

Stepper.displayName = "Stepper";

export default Stepper;
