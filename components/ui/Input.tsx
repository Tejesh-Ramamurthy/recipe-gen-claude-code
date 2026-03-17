import React, { forwardRef, useState, useId } from "react";
import {
  baseStyles,
  inputElementStyles,
  stateStyles,
  placeholderColor,
  getContainerState,
} from "./inputStyles";

export interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasRightIcon?: boolean;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      value,
      onChange,
      hasRightIcon = false,
      rightIcon,
      disabled = false,
      className,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const placeholderId = useId();

    const state = getContainerState(disabled, isActive, isFocused, isHovered);
    const containerStyle: React.CSSProperties = {
      ...baseStyles,
      ...stateStyles[state],
    };

    return (
      <>
        <style>{`#${CSS.escape(placeholderId)}::placeholder { color: ${placeholderColor}; }`}</style>
        <div
          style={containerStyle}
          className={className}
          onMouseEnter={() => !disabled && setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsActive(false);
          }}
          onMouseDown={() => !disabled && setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
        >
          <input
            id={placeholderId}
            ref={ref}
            type="text"
            style={inputElementStyles}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              setIsActive(false);
            }}
          />
          {hasRightIcon && rightIcon && (
            <span style={{ display: "inline-flex", flexShrink: 0 }} aria-hidden="true">
              {rightIcon}
            </span>
          )}
        </div>
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
