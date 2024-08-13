"use client";
import { cn } from "@utils/component.util";
import { Children, forwardRef, ReactNode, Ref } from "react";
import { createElementContext } from "@hooks/use-context.hook";
import { cva } from "class-variance-authority";

/* -------------------------------------------------------------------------------------------------
 * Step Item
 * -----------------------------------------------------------------------------------------------*/

const stepItemVariants = cva("block rounded-full", {
  variants: {
    variant: {
      dot: "w-1.5 h-1.5",
      bar: "w-6 h-1.5",
    },
    isActive: {
      true: "bg-semantic-accent-moderate",
      false: "bg-semantic-bg-muted",
    },
  },
});

export interface StepItemProps extends React.ComponentPropsWithRef<"li"> {
  isActive?: boolean;
}

export type StepItemComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<StepItemProps> & React.RefAttributes<HTMLLIElement>
> & {
  displayName?: string;
};

const StepItem: StepItemComponent = forwardRef<HTMLLIElement, StepItemProps>(
  (
    { children, isActive, className, ...props }: StepItemProps,
    ref?: Ref<HTMLLIElement>
  ) => {
    const { variant } = useStepsContext();

    return (
      <li ref={ref} {...props}>
        <span
          className={cn(stepItemVariants({ variant, isActive }), className)}
        >
          {children}
        </span>
      </li>
    );
  }
);

StepItem.displayName = "StepItem";

/* -------------------------------------------------------------------------------------------------
 * Steps
 * -----------------------------------------------------------------------------------------------*/

export type StepVariant = "dot" | "bar";

export interface StepContext {
  variant?: StepVariant;
  steps: number;
  current: number;
}

export const [StepsContextProvider, useStepsContext] =
  createElementContext<StepContext>(
    "Steps compound components cannot be rendered outside the Steps component"
  );

export interface StepsProps extends React.ComponentPropsWithRef<"ul"> {
  steps: number;
  current: number;
  variant?: StepVariant;
  stepItemClassName?: string;
}

export type StepsComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<StepsProps> & React.RefAttributes<HTMLUListElement>
> & {
  displayName?: string;
};

const StepsRoot: StepsComponent = forwardRef<HTMLUListElement, StepsProps>(
  (
    {
      children,
      className,
      variant = "dot",
      steps,
      current,
      stepItemClassName,
      ...props
    }: StepsProps,
    ref?: Ref<HTMLUListElement>
  ) => {
    const contextValue: StepContext = {
      steps,
      current,
      variant,
    };

    const items: ReactNode[] = [];

    for (let i = 1; i < steps + 1; i++) {
      items.push(
        <StepItem
          key={i}
          isActive={i === current}
          className={stepItemClassName}
        />
      );
    }

    return (
      <StepsContextProvider value={contextValue}>
        <nav aria-label="Step">
          <ul
            ref={ref}
            className={cn("inline-flex space-x-2 items-center", className)}
            {...props}
          >
            {items}
          </ul>
        </nav>
      </StepsContextProvider>
    );
  }
);

StepsRoot.displayName = "Steps";

const Steps = Object.assign(StepsRoot, {
  Item: StepItem,
});

export { Steps };
