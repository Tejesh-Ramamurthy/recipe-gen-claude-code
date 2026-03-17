import type { CSSProperties } from "react";

export const containerStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 24,
};

export const buttonStyles: CSSProperties = {
  width: 48,
  height: 48,
  borderRadius: "50%",
  border: "1px solid #4F4F4F",
  background: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  padding: 0,
  fontSize: 20,
  color: "#6F6F6F",
  lineHeight: 1,
};

export const valueStyles: CSSProperties = {
  fontSize: 20,
  fontWeight: 500,
  color: "#FF7B00",
  fontFamily: '"Satoshi Variable", sans-serif',
  userSelect: "none",
  lineHeight: 1,
};

type InteractionState = "hover" | "active" | "disabled";

export const stateStyles: Record<InteractionState, CSSProperties> = {
  hover: {
    borderColor: "#FF7B00",
    color: "#FF7B00",
  },
  active: {
    borderColor: "#FF7B00",
    color: "#FF7B00",
    background: "rgba(255, 123, 0, 0.1)",
  },
  disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
  },
};
