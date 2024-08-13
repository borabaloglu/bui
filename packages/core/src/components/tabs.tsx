"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@utils/component.util";
import { VariantProps, cva } from "class-variance-authority";

const Tabs = TabsPrimitive.Root;

const tabVariants = cva(
  "inline-flex items-center justify-center p-1 text-semantic-fg-subtle group",
  {
    variants: {
      variant: {
        capsule: "capsule rounded-md bg-semantic-bg-subtle",
        line: "line bg-transparent",
      },
    },
    defaultVariants: {
      variant: "capsule",
    },
  }
);

export interface TabListProps
  extends VariantProps<typeof tabVariants>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabListProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabVariants({ variant }), className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-label-sm font-medium ring-offset-semantic-bg-subtle transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-accent-bold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-semantic-fg-base data-[state=active]:shadow-elevation-low",
      "group-[.line]:border-b group-[.line]:border-b-semantic-border-subtle group-[.line]:data-[state=active]:border-semantic-accent-moderate",
      "group-[.capsule]:rounded-sm group-[.capsule]:data-[state=active]:bg-semantic-accent-moderate group-[.capsule]:data-[state=active]:text-semantic-accent-on-accent",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-semantic-bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-accent-bold focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
