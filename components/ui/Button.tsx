import React, { forwardRef } from "react";
import {
  baseStyles,
  variantStyles,
  sizeStyles,
  iconOnlyStyles,
  disabledStyles,
} from "./buttonStyles";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "medium",
      leftIcon,
      rightIcon,
      iconOnly = false,
      disabled = false,
      onClick,
      children,
      className,
    },
    ref
  ) => {
    const style: React.CSSProperties = {
      ...baseStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...(iconOnly ? iconOnlyStyles[size] : undefined),
      ...(disabled ? disabledStyles : undefined),
    };

    return (
      <button
        ref={ref}
        type="button"
        style={style}
        className={className}
        disabled={disabled}
        onClick={onClick}
        aria-disabled={disabled || undefined}
      >
        {leftIcon && (
          <span style={{ display: "inline-flex", flexShrink: 0 }} aria-hidden="true">
            {leftIcon}
          </span>
        )}
        {!iconOnly && children}
        {rightIcon && (
          <span style={{ display: "inline-flex", flexShrink: 0 }} aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
