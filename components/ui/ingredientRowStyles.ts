import type { CSSProperties } from "react";

export type IngredientRowVariant = "default" | "expiring" | "replaced";

type VariantConfig = {
  showExpiryText: boolean;
  showCTA: boolean;
  showReplacementText: boolean;
  nameStyle: CSSProperties;
  secondaryTextStyle: CSSProperties;
};

export const variantConfig: Record<IngredientRowVariant, VariantConfig> = {
  default: {
    showExpiryText: false,
    showCTA: false,
    showReplacementText: false,
    nameStyle: {},
    secondaryTextStyle: {},
  },
  expiring: {
    showExpiryText: true,
    showCTA: true,
    showReplacementText: false,
    nameStyle: {},
    secondaryTextStyle: {
      color: "#FF6B6B",
      fontSize: "14px",
      fontWeight: 400,
    },
  },
  replaced: {
    showExpiryText: false,
    showCTA: false,
    showReplacementText: true,
    nameStyle: {
      textDecoration: "line-through",
    },
    secondaryTextStyle: {
      color: "#FF7B00",
      fontSize: "14px",
      fontWeight: 400,
    },
  },
};

export const styles = {
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "16px 0",
    borderBottom: "1px solid #3A3A3A",
    fontFamily: '"Satoshi Variable", sans-serif',
  } as CSSProperties,

  leftSection: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    flex: 1,
    minWidth: 0,
  } as CSSProperties,

  contentBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    minWidth: 0,
  } as CSSProperties,

  name: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#FFFFFF",
    margin: 0,
  } as CSSProperties,

  quantity: {
    color: "#CACACA",
    whiteSpace: "nowrap",
    fontSize: "16px",
    fontWeight: 500,
    marginLeft: "16px",
    flexShrink: 0,
  } as CSSProperties,

  ctaButton: {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 14px",
    borderRadius: "999px",
    border: "1px solid #4F4F4F",
    backgroundColor: "transparent",
    color: "#CACACA",
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: '"Satoshi Variable", sans-serif',
    cursor: "pointer",
    whiteSpace: "nowrap",
    width: "fit-content",
  } as CSSProperties,
};
