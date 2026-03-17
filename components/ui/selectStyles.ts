import type { CSSProperties } from "react";

export const triggerStyles: CSSProperties = {
  height: 48,
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid #4F4F4F",
  background: "#1E1E1E",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  cursor: "pointer",
  boxSizing: "border-box",
  fontFamily: '"Satoshi Variable", sans-serif',
  fontSize: 16,
  color: "#CACACA",
  whiteSpace: "nowrap",
};

export const triggerDisabledStyles: CSSProperties = {
  opacity: 0.5,
  cursor: "not-allowed",
};

export const dropdownStyles: CSSProperties = {
  position: "absolute",
  bottom: "100%",
  left: 0,
  marginBottom: 8,
  background: "#1E1E1E",
  border: "1px solid #4F4F4F",
  borderRadius: 8,
  padding: "8px 0",
  minWidth: "100%",
  zIndex: 1000,
  boxSizing: "border-box",
  listStyle: "none",
  margin: 0,
  marginBlockEnd: 8,
};

export const optionStyles: CSSProperties = {
  padding: "8px 12px",
  cursor: "pointer",
  color: "#CACACA",
  fontFamily: '"Satoshi Variable", sans-serif',
  fontSize: 14,
  whiteSpace: "nowrap",
};

export const optionHoverStyles: CSSProperties = {
  background: "rgba(255, 123, 0, 0.1)",
  color: "#FF7B00",
};

export const optionSelectedStyles: CSSProperties = {
  color: "#FF7B00",
  fontWeight: 500,
};

export const chevronStyles = (isOpen: boolean): CSSProperties => ({
  transition: "transform 0.2s ease",
  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
  flexShrink: 0,
});
