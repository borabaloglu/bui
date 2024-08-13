import { cn } from "@utils/component.util";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-semantic-bg-subtle",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
