import React from "react";
import { cn } from "@utils/component.util";
import { TagInputProps, type Tag as TagType } from "@components/tag/tag-input";

import { cva } from "class-variance-authority";
import { X } from "lucide-react";

export const tagVariants = cva(
  "transition-all border inline-flex items-center disabled:pointer-events-none disabled:bg-semantic-bg-disabled disabled:text-semantic-fg-disabled disabled:border-none",
  {
    variants: {
      variant: {
        default:
          "bg-semantic-bg-canvas border-semantic-border-subtle text-semantic-fg-base hover:bg-semantic-bg-subtle",
        primary:
          "bg-semantic-accent-moderate border-transparent text-semantic-accent-on-accent hover:bg-semantic-accent-bold",
        destructive:
          "bg-semantic-bg-danger-primary border-transparent text-semantic-accent-on-accent hover:bg-semantic-bg-danger-secondary",
      },
      size: {
        sm: "pl-3 pr-2 h-8 text-label-sm",
        md: "pl-4 pr-3 h-9 text-label-md",
        lg: "pl-5 pr-4 h-10 text-label-lg",
      },
      shape: {
        default: "rounded-md",
        square: "rounded-none",
        pill: "rounded-full",
      },
      textCase: {
        uppercase: "uppercase",
        lowercase: "lowercase",
        capitalize: "capitalize",
      },
      animation: {
        none: "",
        fadeIn: "animate-fadeIn",
        slideIn: "animate-slideIn",
        bounce: "animate-bounce",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
      shape: "default",
      animation: "fadeIn",
    },
  }
);

export type TagProps = {
  tagObj: TagType;
  variant: TagInputProps["variant"];
  size: TagInputProps["size"];
  shape: TagInputProps["shape"];
  textCase: TagInputProps["textCase"];
  animation: TagInputProps["animation"];
  onRemoveTag: (id: string) => void;
  disabled?: boolean;
} & Pick<TagInputProps, "direction" | "onTagClick">;

export const Tag: React.FC<TagProps> = ({
  tagObj,
  direction,
  onTagClick,
  onRemoveTag,
  variant,
  size,
  shape,
  textCase,
  animation,
  disabled,
}) => {
  return (
    <button
      key={tagObj.id}
      className={cn(
        "gap-x-1",
        onTagClick && "cursor-pointer",
        tagVariants({
          variant,
          size,
          shape,
          textCase,
          animation,
        }),
        {
          "justify-between": direction === "column",
        }
      )}
      onClick={() => {
        !disabled && onTagClick && onTagClick(tagObj);
      }}
      type="button"
      disabled={disabled}
    >
      {tagObj.text}
      <span
        onClick={(e) => {
          e.stopPropagation(); // Prevent event from bubbling up to the tag span
          onRemoveTag(tagObj.id);
        }}
        className={cn("flex items-center p-1 h-full")}
      >
        <X size={16} />
      </span>
    </button>
  );
};
