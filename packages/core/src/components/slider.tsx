"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@utils/component.util";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className={cn(
        "relative h-2 w-full grow overflow-hidden rounded-full bg-semantic-bg-muted",
        props.disabled && "bg-semantic-bg-disabled"
      )}
    >
      <SliderPrimitive.Range
        className={cn(
          "absolute h-full bg-semantic-accent-moderate",
          props.disabled && "bg-semantic-border-disabled"
        )}
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        "block h-5 w-5 rounded-full bg-semantic-accent-moderate shadow-elevation-medium transition-colors focus-visible:outline-none focus-visible:shadow-focus-accent",
        props.disabled && "pointer-events-none bg-semantic-fg-disabled"
      )}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
