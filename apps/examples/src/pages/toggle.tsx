import { Bold } from "lucide-react";

import { Toggle } from "@borabaloglu/ui";

const ToggleExample = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-heading-3">Default</h3>
        <div className="flex items-center space-x-2">
          <Toggle aria-label="Toggle bold" disabled size="sm">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle bold" size="sm">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle bold" size="md">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle bold" size="lg">
            <Bold className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-heading-3">Outline</h3>
        <div className="flex items-center space-x-2">
          <Toggle aria-label="Toggle bold" variant="outline" size="sm" disabled>
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle bold" variant="outline" size="sm">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle bold" variant="outline" size="md">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle bold" variant="outline" size="lg">
            <Bold className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
    </div>
  );
};

export default ToggleExample;
