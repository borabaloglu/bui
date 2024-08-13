import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@utils/component.util";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-4 text-label-sm font-medium",
  {
    variants: {
      variant: {
        default: "border border-semantic-fg-subtle text-semantic-fg-subtle",
        success: "border border-semantic-fg-success text-semantic-fg-success",
        error: "border border-semantic-fg-error text-semantic-fg-error",
        warning: "border border-semantic-fg-warning text-semantic-fg-warning",
        info: "border border-semantic-fg-info text-semantic-fg-info",
      },
      filled: {
        false: "!bg-transparent",
      },
      contrast: {
        true: "",
      },
      size: {
        sm: "px-4 h-8 text-label-sm",
        md: "px-5 h-9 text-label-md",
        lg: "px-6 h-10 text-label-lg",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        filled: true,
        contrast: true,
        className: "bg-semantic-bg-muted text-semantic-fg-muted",
      },
      {
        variant: "default",
        filled: true,
        contrast: false,
        className: "bg-semantic-bg-subtle text-semantic-fg-subtle",
      },
      {
        variant: "success",
        filled: true,
        contrast: true,
        className:
          "bg-semantic-bg-success-contrast text-semantic-fg-on-contrast",
      },
      {
        variant: "success",
        filled: true,
        contrast: false,
        className: "bg-semantic-bg-success text-semantic-fg-success",
      },
      {
        variant: "error",
        filled: true,
        contrast: true,
        className: "bg-semantic-bg-error-contrast text-semantic-fg-on-contrast",
      },
      {
        variant: "error",
        filled: true,
        contrast: false,
        className: "bg-semantic-bg-error text-semantic-fg-error",
      },
      {
        variant: "warning",
        filled: true,
        contrast: true,
        className:
          "bg-semantic-bg-warning-contrast text-semantic-fg-on-contrast",
      },
      {
        variant: "warning",
        filled: true,
        contrast: false,
        className: "bg-semantic-bg-warning text-semantic-fg-warning",
      },
      {
        variant: "info",
        filled: true,
        contrast: true,
        className: "bg-semantic-bg-info-contrast text-semantic-fg-on-contrast",
      },
      {
        variant: "info",
        filled: true,
        contrast: false,
        className: "bg-semantic-bg-info text-semantic-fg-info",
      },
    ],
    defaultVariants: {
      variant: "default",
      filled: true,
      contrast: false,
      size: "sm",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({
  className,
  variant,
  filled,
  contrast,
  size,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({
          variant,
          filled: Boolean(filled),
          contrast: Boolean(contrast),
          size,
        }),
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
