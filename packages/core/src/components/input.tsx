import * as React from "react";

import { cn } from "@utils/component.util";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  inputClassName?: string;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error,
      trailingIcon,
      leadingIcon,
      inputClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "relative inline-flex h-10 items-center rounded-md bg-transparent",
          className
        )}
      >
        {leadingIcon && (
          <div
            className={cn(
              "absolute inset-x-0 my-auto left-3 w-6 h-6 max-w-6 flex items-center justify-center text-semantic-fg-subtle",
              error && "text-semantic-fg-error"
            )}
          >
            {leadingIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-full w-full rounded-md bg-semantic-bg-canvas border border-semantic-border-subtle hover:border-semantic-border-muted px-4 py-4 text-label-sm text-semantic-fg-base file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-semantic-fg-subtle focus-visible:outline-none focus-visible:shadow-focus-accent focus-visible:border-semantic-accent-moderate disabled:border-semantic-border-disabled disabled:cursor-not-allowed disabled:bg-semantic-bg-disabled disabled:text-semantic-fg-disabled disabled:placeholder-semantic-fg-disabled focus-visible:hover:border-semantic-accent-moderate",
            error &&
              "!border-semantic-border-error bg-semantic-bg-error focus-visible:border-semantic-border-error",
            leadingIcon && "!pl-10",
            trailingIcon && "!pr-10",
            inputClassName
          )}
          ref={ref}
          {...props}
        />
        {trailingIcon && (
          <div
            className={cn(
              "absolute my-auto right-3 w-6 h-6 max-w-6 flex items-center justify-center text-semantic-fg-subtle",
              error && "text-semantic-fg-error"
            )}
          >
            {trailingIcon}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
