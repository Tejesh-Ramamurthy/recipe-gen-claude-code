import React, { useState, useRef, useEffect } from "react";
import {
  triggerStyles,
  triggerDisabledStyles,
  dropdownStyles,
  optionStyles,
  optionHoverStyles,
  optionSelectedStyles,
  chevronStyles,
} from "./selectStyles";

const UNIT_OPTIONS = [
  { label: "Kilograms", value: "kg" },
  { label: "Grams", value: "g" },
  { label: "Milliliters", value: "ml" },
  { label: "Liters", value: "l" },
  { label: "Numbers", value: "nos" },
];

export interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options?: { label: string; value: string }[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options = UNIT_OPTIONS,
  placeholder = "Select",
  disabled = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find((o) => o.value === value);
  const displayValue = selectedOption ? selectedOption.value : placeholder;

  return (
    <div ref={containerRef} style={{ position: "relative", display: "inline-block" }} className={className}>
      <button
        type="button"
        style={{
          ...triggerStyles,
          ...(disabled ? triggerDisabledStyles : {}),
        }}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        disabled={disabled}
      >
        <span>{displayValue}</span>
        <svg
          width={12}
          height={12}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={chevronStyles(isOpen)}
          aria-hidden="true"
        >
          <path d="M3 4.5L6 7.5L9 4.5" stroke="#CACACA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <ul role="listbox" style={dropdownStyles}>
          {options.map((option, index) => {
            const isSelected = option.value === value;
            const isHovered = hoveredIndex === index;
            return (
              <li
                key={option.value}
                role="option"
                aria-selected={isSelected}
                style={{
                  ...optionStyles,
                  ...(isSelected ? optionSelectedStyles : {}),
                  ...(isHovered ? optionHoverStyles : {}),
                }}
                onClick={() => handleSelect(option.value)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {option.label} ({option.value})
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

Select.displayName = "Select";

export default Select;
