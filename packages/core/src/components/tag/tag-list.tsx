import React from "react";
import { type Tag as TagType } from "@components/tag/tag-input";
import { Tag, TagProps } from "@components/tag/tag";

import { cn } from "@utils/component.util";

export type TagListProps = {
  tags: TagType[];
  customTagRenderer?: (tag: TagType) => React.ReactNode;
  direction?: TagProps["direction"];
  onSortEnd: (oldIndex: number, newIndex: number) => void;
  disabled?: boolean;
} & Omit<TagProps, "tagObj">;

export const TagList: React.FC<TagListProps> = ({
  tags,
  customTagRenderer,
  direction,
  onSortEnd,
  disabled,
  ...tagListProps
}) => {
  return (
    <div
      className={cn("rounded-md max-w-[450px]", {
        "flex flex-wrap gap-2": direction === "row",
        "flex flex-col gap-2": direction === "column",
      })}
    >
      {tags.map((tagObj) =>
        customTagRenderer ? (
          customTagRenderer(tagObj)
        ) : (
          <Tag
            key={tagObj.id}
            tagObj={tagObj}
            disabled={disabled}
            {...tagListProps}
          />
        )
      )}
    </div>
  );
};
