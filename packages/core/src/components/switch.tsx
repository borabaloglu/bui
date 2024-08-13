"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@utils/component.util";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex p-0.5 h-6 w-10 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none disabled:cursor-not-allowed data-[state=checked]:bg-semantic-accent-moderate data-[state=unchecked]:bg-semantic-bg-interactive-primary data-[state=checked]:hover:bg-semantic-accent-bold data-[state=unchecked]:hover:bg-semantic-bg-interactive-secondary data-[state=checked]:disabled:bg-semantic-bg-disabled data-[state=unchecked]:disabled:bg-semantic-bg-disabled",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-semantic-accent-on-accent ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        props.disabled && "bg-semantic-fg-disabled"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
