import type { CSSProperties } from "react";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "small" | "medium" | "large";

export const variantStyles: Record<Variant, CSSProperties> = {
  primary: {
    background: "#FF7B00",
    color: "#212121",
    border: "none",
  },
  secondary: {
    background: "transparent",
    color: "#CACACA",
    border: "1px solid #4F4F4F",
  },
  tertiary: {
    background: "transparent",
    color: "#FF7B00",
    border: "none",
  },
};

export const sizeStyles: Record<Size, CSSProperties> = {
  small: {
    height: 28,
    fontSize: 14,
    paddingLeft: 12,
    paddingRight: 12,
  },
  medium: {
    height: 40,
    fontSize: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  large: {
    height: 48,
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
  },
};

export const iconOnlyStyles: Record<Size, CSSProperties> = {
  small: {
    width: 28,
    height: 28,
    padding: 0,
  },
  medium: {
    width: 40,
    height: 40,
    padding: 0,
  },
  large: {
    width: 48,
    height: 48,
    padding: 0,
  },
};

export const baseStyles: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  borderRadius: 9999,
  fontWeight: 500,
  fontFamily: '"Satoshi Variable", sans-serif',
  cursor: "pointer",
  boxSizing: "border-box",
  lineHeight: 1,
};

export const disabledStyles: CSSProperties = {
  opacity: 0.5,
  cursor: "not-allowed",
  pointerEvents: "none",
};
