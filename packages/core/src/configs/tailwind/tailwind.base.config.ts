const tailwindRadix = require("tailwindcss-radix");

export interface SemanticColors {
  "semantic-accent-bold": string;
  "semantic-accent-dim": string;
  "semantic-accent-intense": string;
  "semantic-accent-moderate": string;
  "semantic-accent-muted": string;
  "semantic-accent-on-accent": string;
  "semantic-accent-strong": string;
  "semantic-accent-subtle": string;
  "semantic-bg-canvas": string;
  "semantic-bg-contrast": string;
  "semantic-bg-danger-primary": string;
  "semantic-bg-danger-secondary": string;
  "semantic-bg-danger-tertiary": string;
  "semantic-bg-disabled": string;
  "semantic-bg-error": string;
  "semantic-bg-error-contrast": string;
  "semantic-bg-info": string;
  "semantic-bg-info-contrast": string;
  "semantic-bg-interactive-primary": string;
  "semantic-bg-interactive-secondary": string;
  "semantic-bg-interactive-tertiary": string;
  "semantic-bg-muted": string;
  "semantic-bg-notification": string;
  "semantic-bg-subtle": string;
  "semantic-bg-success": string;
  "semantic-bg-success-contrast": string;
  "semantic-bg-surface": string;
  "semantic-bg-warning": string;
  "semantic-bg-warning-contrast": string;
  "semantic-border-contrast": string;
  "semantic-border-disabled": string;
  "semantic-border-error": string;
  "semantic-border-interactive-primary": string;
  "semantic-border-muted": string;
  "semantic-border-subtle": string;
  "semantic-fg-base": string;
  "semantic-fg-danger": string;
  "semantic-fg-disabled": string;
  "semantic-fg-error": string;
  "semantic-fg-info": string;
  "semantic-fg-link": string;
  "semantic-fg-muted": string;
  "semantic-fg-on-contrast": string;
  "semantic-fg-static-dark": string;
  "semantic-fg-static-light": string;
  "semantic-fg-subtle": string;
  "semantic-fg-success": string;
  "semantic-fg-warning": string;
  "semantic-social-apple-primary": string;
  "semantic-social-apple-secondary": string;
  "semantic-social-apple-tertiary": string;
}

export const generateTailwindConfig = (semanticColors: SemanticColors) => ({
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      colors: {
        "global-white": "var(--global-white)",
        "global-blue-10": "var(--global-blue-10)",
        "global-blue-100": "var(--global-blue-100)",
        "global-blue-20": "var(--global-blue-20)",
        "global-blue-30": "var(--global-blue-30)",
        "global-blue-40": "var(--global-blue-40)",
        "global-blue-50": "var(--global-blue-50)",
        "global-blue-60": "var(--global-blue-60)",
        "global-blue-70": "var(--global-blue-70)",
        "global-blue-80": "var(--global-blue-80)",
        "global-blue-90": "var(--global-blue-90)",
        "global-brand-10": "var(--global-brand-10)",
        "global-brand-100": "var(--global-brand-100)",
        "global-brand-20": "var(--global-brand-20)",
        "global-brand-30": "var(--global-brand-30)",
        "global-brand-40": "var(--global-brand-40)",
        "global-brand-50": "var(--global-brand-50)",
        "global-brand-60": "var(--global-brand-60)",
        "global-brand-70": "var(--global-brand-70)",
        "global-brand-80": "var(--global-brand-80)",
        "global-brand-90": "var(--global-brand-90)",
        "global-green-10": "var(--global-green-10)",
        "global-green-100": "var(--global-green-100)",
        "global-green-20": "var(--global-green-20)",
        "global-green-30": "var(--global-green-30)",
        "global-green-40": "var(--global-green-40)",
        "global-green-50": "var(--global-green-50)",
        "global-green-60": "var(--global-green-60)",
        "global-green-70": "var(--global-green-70)",
        "global-green-80": "var(--global-green-80)",
        "global-green-90": "var(--global-green-90)",
        "global-grey-10": "var(--global-grey-10)",
        "global-grey-100": "var(--global-grey-100)",
        "global-grey-20": "var(--global-grey-20)",
        "global-grey-30": "var(--global-grey-30)",
        "global-grey-40": "var(--global-grey-40)",
        "global-grey-50": "var(--global-grey-50)",
        "global-grey-60": "var(--global-grey-60)",
        "global-grey-70": "var(--global-grey-70)",
        "global-grey-80": "var(--global-grey-80)",
        "global-grey-90": "var(--global-grey-90)",
        "global-red-10": "var(--global-red-10)",
        "global-red-100": "var(--global-red-100)",
        "global-red-20": "var(--global-red-20)",
        "global-red-30": "var(--global-red-30)",
        "global-red-40": "var(--global-red-40)",
        "global-red-50": "var(--global-red-50)",
        "global-red-60": "var(--global-red-60)",
        "global-red-70": "var(--global-red-70)",
        "global-red-80": "var(--global-red-80)",
        "global-red-90": "var(--global-red-90)",
        "global-yellow-10": "var(--global-yellow-10)",
        "global-yellow-100": "var(--global-yellow-100)",
        "global-yellow-20": "var(--global-yellow-20)",
        "global-yellow-30": "var(--global-yellow-30)",
        "global-yellow-40": "var(--global-yellow-40)",
        "global-yellow-50": "var(--global-yellow-50)",
        "global-yellow-60": "var(--global-yellow-60)",
        "global-yellow-70": "var(--global-yellow-70)",
        "global-yellow-80": "var(--global-yellow-80)",
        "global-yellow-90": "var(--global-yellow-90)",
        "semantic-bg-overlay": "#000000b2",
        "semantic-social-facebook-primary": "#0078ff",
        "semantic-social-facebook-secondary": "#0067db",
        "semantic-social-facebook-tertiary": "#0056b8",
        "semantic-social-google-primary": "#f4f6f7",
        "semantic-social-google-secondary": "#e8ebeb",
        "semantic-social-google-tertiary": "#daddde",
        "semantic-social-twitter-primary": "#1da1f2",
        "semantic-social-twitter-secondary": "#0c90e1",
        "semantic-social-twitter-tertiary": "#0b84cf",
        ...semanticColors,
      },
      borderRadius: {
        none: "0px",
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "32px",
        xxl: "48px",
        full: "9999px",
      },
      fontSize: {
        "display-1": [
          "64px",
          {
            lineHeight: "96px",
          },
        ],
        "display-2": [
          "40px",
          {
            lineHeight: "60px",
          },
        ],
        "heading-1": [
          "32px",
          {
            lineHeight: "48px",
          },
        ],
        "heading-2": [
          "24px",
          {
            lineHeight: "36px",
          },
        ],
        "heading-3": [
          "18px",
          {
            lineHeight: "24px",
          },
        ],
        "heading-4": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        "heading-5": [
          "14px",
          {
            lineHeight: "21px",
          },
        ],
        "heading-6": [
          "12px",
          {
            lineHeight: "18px",
          },
        ],
        "paragraph-lg": [
          "18px",
          {
            lineHeight: "27px",
          },
        ],
        "paragraph-md": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        "paragraph-sm": [
          "14px",
          {
            lineHeight: "21px",
          },
        ],
        "paragraph-xs": [
          "12px",
          {
            lineHeight: "18px",
          },
        ],
        "label-lg": [
          "18px",
          {
            lineHeight: "27px",
          },
        ],
        "label-md": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        "label-sm": [
          "14px",
          {
            lineHeight: "21px",
          },
        ],
        "label-xs": [
          "12px",
          {
            lineHeight: "18px",
          },
        ],
      },
      boxShadow: {
        "elevation-low":
          "0px 1px 8px 0px rgba(20, 20, 20, 0.08), 0px 0px 1px 0px rgba(20, 20, 20, 0.12)",
        "elevation-medium":
          "0px 4px 12px 2px rgba(20, 20, 20, 0.08), 0px 0px 1px 0px rgba(20, 20, 20, 0.12)",
        "elevation-high":
          "0px 8px 16px 8px rgba(20, 20, 20, 0.04), 0px 0px 1px 0px rgba(20, 20, 20, 0.12)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.3s ease-in-out",
        slideIn: "slideIn 0.3s ease-in-out",
        bounce: "bounce 0.6s ease-in-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [tailwindRadix(), require("tailwindcss-animate")],
});
