"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@utils/component.util";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-label-sm font-medium ring-offset-semantic-bg-canvas transition-colors hover:bg-semantic-bg-subtle hover:text-semantic-fg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-accent-bold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-semantic-accent-moderate data-[state=on]:text-semantic-accent-on-accent",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-semantic-border-subtle bg-transparent",
      },
      size: {
        sm: "h-8 px-2",
        md: "h-9 px-2.5",
        lg: "h-10 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
