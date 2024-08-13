"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@utils/component.util";

const checkboxVariants = cva(
  "peer shrink-0 rounded-sm bg-semantic-bg-canvas border focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-semantic-bg-disabled disabled:border-semantic-border-disabled data-[state=checked]:disabled:text-semantic-fg-disabled data-[state=checked]:disabled:bg-semantic-bg-disabled data-[state=checked]:disabled:border-semantic-border-disabled data-[state=checked]:text-semantic-accent-on-accent",
  {
    variants: {
      variant: {
        enabled:
          "border-semantic-border-subtle hover:border-semantic-accent-moderate focus-visible:shadow-focus-accent data-[state=checked]:border-semantic-accent-moderate data-[state=checked]:bg-semantic-accent-moderate",
        error:
          "border-semantic-fg-error data-[state=checked]:border-semantic-bg-error-contrast data-[state=checked]:bg-semantic-bg-error-contrast focus-visible:shadow-focus-destructive",
      },
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      variant: "enabled",
      size: "md",
    },
  }
);

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, size, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ variant, size }), className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check
        className={cn(
          "",
          size === "sm" && "w-3 h-3",
          (size === "md" || !size) && "w-4 h-4",
          size === "lg" && "w-5 h-5"
        )}
      />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
