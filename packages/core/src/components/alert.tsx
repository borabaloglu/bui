import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@utils/component.util";

const alertVariants = cva(
  "flex items-center w-full rounded-md border p-4 space-x-4",
  {
    variants: {
      variant: {
        default:
          "border-semantic-border-muted bg-semantic-bg-canvas text-semantic-fg-base",
        warning:
          "border-semantic-bg-warning-contrast bg-semantic-bg-warning text-semantic-fg-warning",
        destructive:
          "bg-semantic-bg-error border-semantic-border-error text-semantic-fg-error [&>svg]:text-semantic-fg-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("text-label-sm font-semibold", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-label-sm", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

const AlertIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("size-4", className)} {...props} />
));
AlertIcon.displayName = "AlertIcon";

const AlertContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col items-start space-y-1", className)}
    {...props}
  />
));
AlertContent.displayName = "AlertContent";

export { Alert, AlertTitle, AlertDescription, AlertContent, AlertIcon };
