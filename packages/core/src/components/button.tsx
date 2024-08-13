import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@utils/component.util";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none disabled:bg-semantic-bg-disabled disabled:text-semantic-fg-disabled disabled:border-none",
  {
    variants: {
      variant: {
        filled:
          "button-filled bg-semantic-accent-moderate text-semantic-accent-on-accent hover:bg-semantic-accent-bold",
        filledTonal:
          "button-filled-tonal bg-semantic-accent-subtle text-semantic-accent-bold hover:bg-semantic-accent-muted",
        destructive:
          "button-destructive bg-semantic-bg-danger-primary text-semantic-accent-on-accent hover:bg-semantic-bg-danger-secondary",
        outline:
          "button-outline text-semantic-accent-bold border border-semantic-accent-bold hover:bg-semantic-accent-subtle",
        text: "button-text text-semantic-accent-bold hover:bg-semantic-accent-subtle",
      },
      size: {
        sm: "button-sm px-4 h-8 text-label-sm",
        md: "button-md px-5 h-9 text-label-md",
        lg: "button-lg px-6 h-10 text-label-lg",
        "icon-sm": "button-icon-sm size-8",
        "icon-md": "button-icon-md size-9",
        "icon-lg": "button-icon-lg size-10",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "sm",
    },
  }
);

export interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
