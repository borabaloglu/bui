import * as React from "react";

import { cn } from "@utils/component.util";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-semantic-border-subtle bg-semantic-bg-canvas px-4 py-4 text-paragraph-sm text-semantic-fg-base placeholder:text-semantic-fg-subtle focus-visible:outline-none focus-visible:border-semantic-accent-moderate disabled:border-semantic-border-disabled disabled:cursor-not-allowed disabled:bg-semantic-bg-disabled disabled:text-semantic-fg-disabled disabled:placeholder-semantic-fg-disabled hover:border-semantic-border-muted",
          error &&
            "!border-semantic-border-error bg-semantic-bg-error focus-visible:border-semantic-border-error",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
