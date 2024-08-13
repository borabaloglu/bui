import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@borabaloglu/ui";
import React from "react";
import { LuChevronsUpDown } from "react-icons/lu";

const CollapsibleExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-label-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="text" size="sm">
            <LuChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-sm border border-semantic-border-subtle px-4 py-3 font-mono text-label-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-sm border border-semantic-border-subtle px-4 py-3 font-mono text-label-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-sm border border-semantic-border-subtle px-4 py-3 font-mono text-label-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleExample;
