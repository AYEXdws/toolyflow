import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "var(--brand-bg)",
          surface: "var(--brand-surface)",
          card: "var(--brand-card)",
          border: "var(--brand-border)",
          hover: "var(--brand-border-hover)",
          primary: "var(--brand-primary)",
          secondary: "var(--brand-secondary)",
          text: {
            primary: "var(--brand-text-primary)",
            secondary: "var(--brand-text-secondary)",
            tertiary: "var(--brand-text-tertiary)",
          },
          badge: {
            bg: "var(--brand-badge-bg)",
            text: "var(--brand-badge-text)",
          },
        },
      },
      backgroundImage: {
        "brand-gradient": "var(--brand-gradient)",
      },
      boxShadow: {
        brand: "var(--brand-shadow)",
      },
    },
  },
};

export default config;
