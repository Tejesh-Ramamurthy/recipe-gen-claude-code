import type { CSSProperties } from "react";

type InputState = "default" | "hover" | "focus" | "active" | "disabled";

export const baseStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 5,
  width: 247,
  height: 48,
  padding: 10,
  borderRadius: 8,
  border: "1px solid",
  background: "#1E1E1E",
  boxSizing: "border-box",
};

export const inputElementStyles: CSSProperties = {
  flex: 1,
  background: "transparent",
  border: "none",
  outline: "none",
  color: "#FFFFFF",
  fontFamily: '"Satoshi Variable", sans-serif',
  fontSize: 16,
  fontWeight: 400,
  width: "100%",
};

export const stateStyles: Record<InputState, CSSProperties> = {
  default: {
    borderColor: "#3A3A3A",
  },
  hover: {
    borderColor: "#5A5A5A",
  },
  focus: {
    borderColor: "#FF7B00",
  },
  active: {
    borderColor: "#FF9A3C",
  },
  disabled: {
    borderColor: "#3A3A3A",
    opacity: 0.5,
    cursor: "not-allowed",
  },
};

export const placeholderColor = "#9A9A9A";

export function getContainerState(
  disabled: boolean,
  isActive: boolean,
  isFocused: boolean,
  isHovered: boolean
): InputState {
  if (disabled) return "disabled";
  if (isActive) return "active";
  if (isFocused) return "focus";
  if (isHovered) return "hover";
  return "default";
}
