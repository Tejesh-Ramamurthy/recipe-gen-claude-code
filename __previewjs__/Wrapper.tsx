import { Wrapper as NextjsWrapper } from "@previewjs/config-helper-nextjs";
import type { ReactNode } from "react";

// Import Fontshare fonts for Preview.js
const fontLinks = [
  "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap",
  "https://api.fontshare.com/v2/css?f[]=awesome-serif@400,700&display=swap",
];

if (typeof document !== "undefined") {
  fontLinks.forEach((href) => {
    const existing = document.querySelector(`link[href="${href}"]`);
    if (!existing) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  });
}

export default function Wrapper({ children }: { children: ReactNode }) {
  return <NextjsWrapper>{children}</NextjsWrapper>;
}
