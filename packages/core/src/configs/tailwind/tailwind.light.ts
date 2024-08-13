// @ts-nocheck

import plugin from "tailwindcss/plugin";

import { generateTailwindConfig } from "./tailwind.base.config";

const lightSemanticColors = {
  "semantic-accent-bold": "var(--global-brand-70)",
  "semantic-accent-dim": "var(--global-brand-40)",
  "semantic-accent-intense": "var(--global-brand-90)",
  "semantic-accent-moderate": "var(--global-brand-60)",
  "semantic-accent-muted": "var(--global-brand-30)",
  "semantic-accent-on-accent": "var(--global-white)",
  "semantic-accent-strong": "var(--global-brand-80)",
  "semantic-accent-subtle": "var(--global-brand-20)",
  "semantic-bg-canvas": "var(--global-white)",
  "semantic-bg-contrast": "var(--global-grey-100)",
  "semantic-bg-danger-primary": "var(--global-red-50)",
  "semantic-bg-danger-secondary": "var(--global-red-60)",
  "semantic-bg-danger-tertiary": "var(--global-red-70)",
  "semantic-bg-disabled": "var(--global-grey-30)",
  "semantic-bg-error": "var(--global-red-10)",
  "semantic-bg-error-contrast": "var(--global-red-60)",
  "semantic-bg-info": "var(--global-blue-10)",
  "semantic-bg-info-contrast": "var(--global-blue-60)",
  "semantic-bg-interactive-primary": "var(--global-grey-20)",
  "semantic-bg-interactive-secondary": "var(--global-grey-30)",
  "semantic-bg-interactive-tertiary": "var(--global-grey-40)",
  "semantic-bg-muted": "var(--global-grey-20)",
  "semantic-bg-notification": "var(--global-red-60)",
  "semantic-bg-subtle": "var(--global-grey-10)",
  "semantic-bg-success": "var(--global-green-10)",
  "semantic-bg-success-contrast": "var(--global-green-60)",
  "semantic-bg-surface": "var(--global-white)",
  "semantic-bg-warning": "var(--global-yellow-10)",
  "semantic-bg-warning-contrast": "var(--global-yellow-30)",
  "semantic-border-contrast": "var(--global-grey-100)",
  "semantic-border-disabled": "var(--global-grey-40)",
  "semantic-border-error": "var(--global-red-40)",
  "semantic-border-interactive-primary": "var(--global-grey-30)",
  "semantic-border-muted": "var(--global-grey-30)",
  "semantic-border-subtle": "var(--global-grey-20)",
  "semantic-fg-base": "var(--global-grey-100)",
  "semantic-fg-danger": "var(--global-red-60)",
  "semantic-fg-disabled": "var(--global-grey-50)",
  "semantic-fg-error": "var(--global-red-60)",
  "semantic-fg-info": "var(--global-blue-60)",
  "semantic-fg-link": "var(--semantic-accent-moderate)",
  "semantic-fg-muted": "var(--global-grey-60)",
  "semantic-fg-on-contrast": "var(--global-white)",
  "semantic-fg-static-dark": "var(--global-grey-100)",
  "semantic-fg-static-light": "var(--global-white)",
  "semantic-fg-subtle": "var(--global-grey-50)",
  "semantic-fg-success": "var(--global-green-60)",
  "semantic-fg-warning": "var(--global-yellow-60)",
  "semantic-social-apple-primary": "var(--global-grey-100)",
  "semantic-social-apple-secondary": "var(--global-grey-90)",
};

export const config = plugin(
  function () {},
  generateTailwindConfig(lightSemanticColors)
);
