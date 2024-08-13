"use client";

import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "group toast rounded-md p-4 border flex gap-4 group-[.toaster]:border-semantic-border-subtle group-[.toaster]:gap-4 group-[.toaster]:right-0 group-[.toaster]:bg-semantic-bg-canvas group-[.toaster]:text-heading-5 group-[.toaster]:text-semantic-fg-base w-[400px]",
          description:
            "group-[.toast]:text-paragraph-sm group-[.toast]:text-semantic-fg-base",
          actionButton:
            "group-[.toast]:flex group-[.toast]:flex-shrink-0 group-[.toast]:items-center group-[.toast]:px-2 group-[.toast]:text-label-xs group-[.toast]:text-semantic-accent-on-accent group-[.toast]:bg-semantic-accent-moderate group-[.toast]:h-6 group-[.toast]:my-auto group-[.toast]:rounded-sm group-[.toast]:hover:bg-semantic-accent-bold group-[.toast]:transition-colors",
          cancelButton:
            "group-[.toast]:flex group-[.toast]:flex-shrink-0 group-[.toast]:items-center group-[.toast]:px-2 group-[.toast]:text-label-xs group-[.toast]:text-semantic-fg-danger group-[.toast]:bg-semantic-bg-danger-tertiary group-[.toast]:h-6 group-[.toast]:my-auto group-[.toast]:rounded-sm group-[.toast]:hover:bg-semantic-bg-danger-secondary group-[.toast]:transition-colors",
          icon: "group-[.toast]:my-auto",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
