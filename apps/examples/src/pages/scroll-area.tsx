import { ScrollArea, Separator } from "@borabaloglu/ui";
import * as React from "react";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const ScrollAreaExample = () => {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border border-semantic-border-subtle">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ScrollAreaExample;
