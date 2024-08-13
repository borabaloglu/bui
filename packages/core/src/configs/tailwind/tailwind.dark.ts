// @ts-nocheck

import plugin from "tailwindcss/plugin";

import { generateTailwindConfig } from "./tailwind.base.config";

const darkSemanticColors = {
  "semantic-accent-bold": "var(--global-brand-40)",
  "semantic-accent-dim": "var(--global-brand-70)",
  "semantic-accent-intense": "var(--global-brand-20)",
  "semantic-accent-moderate": "var(--global-brand-60)",
  "semantic-accent-muted": "var(--global-brand-80)",
  "semantic-accent-on-accent": "var(--global-white)",
  "semantic-accent-strong": "var(--global-brand-30)",
  "semantic-accent-subtle": "var(--global-brand-90)",
  "semantic-bg-canvas": "var(--global-grey-100)",
  "semantic-bg-contrast": "var(--global-white)",
  "semantic-bg-danger-primary": "var(--global-red-50)",
  "semantic-bg-danger-secondary": "var(--global-red-60)",
  "semantic-bg-danger-tertiary": "var(--global-red-70)",
  "semantic-bg-disabled": "var(--global-grey-80)",
  "semantic-bg-error": "var(--global-red-80)",
  "semantic-bg-error-contrast": "var(--global-red-50)",
  "semantic-bg-info": "var(--global-blue-80)",
  "semantic-bg-info-contrast": "var(--global-blue-60)",
  "semantic-bg-interactive-primary": "var(--global-grey-80)",
  "semantic-bg-interactive-secondary": "var(--global-grey-70)",
  "semantic-bg-interactive-tertiary": "var(--global-grey-60)",
  "semantic-bg-muted": "var(--global-grey-80)",
  "semantic-bg-notification": "var(--global-red-60)",
  "semantic-bg-subtle": "var(--global-grey-90)",
  "semantic-bg-success": "var(--global-green-80)",
  "semantic-bg-success-contrast": "var(--global-green-50)",
  "semantic-bg-surface": "var(--global-grey-80)",
  "semantic-bg-warning": "var(--global-yellow-80)",
  "semantic-bg-warning-contrast": "var(--global-yellow-30)",
  "semantic-border-contrast": "var(--global-white)",
  "semantic-border-disabled": "var(--global-grey-60)",
  "semantic-border-error": "var(--global-red-70)",
  "semantic-border-interactive-primary": "var(--global-grey-70)",
  "semantic-border-muted": "var(--global-grey-70)",
  "semantic-border-subtle": "var(--global-grey-80)",
  "semantic-fg-base": "var(--global-white)",
  "semantic-fg-danger": "var(--global-red-40)",
  "semantic-fg-disabled": "var(--global-grey-60)",
  "semantic-fg-error": "var(--global-red-40)",
  "semantic-fg-info": "var(--global-blue-40)",
  "semantic-fg-link": "var(--semantic-accent-moderate)",
  "semantic-fg-muted": "var(--global-grey-50)",
  "semantic-fg-on-contrast": "var(--global-grey-100)",
  "semantic-fg-static-dark": "var(--global-grey-100)",
  "semantic-fg-static-light": "var(--global-white)",
  "semantic-fg-subtle": "var(--global-grey-60)",
  "semantic-fg-success": "var(--global-green-40)",
  "semantic-fg-warning": "var(--global-yellow-30)",
  "semantic-social-apple-primary": "var(--global-white)",
  "semantic-social-apple-secondary": "var(--global-grey-10)",
  "semantic-social-apple-tertiary": "var(--global-grey-20)",
};

export const config = plugin(
  function () {},
  generateTailwindConfig(darkSemanticColors)
);
