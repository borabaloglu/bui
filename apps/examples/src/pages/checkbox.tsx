import { Checkbox, Label } from "@borabaloglu/ui";
import * as React from "react";

const CheckboxExample = () => {
  return (
    <>
      <div>
        <h3 className="text-heading-3">Without label</h3>
        <div className="flex items-center space-x-4 mt-2">
          <Checkbox size="sm" />
          <Checkbox size="md" />
          <Checkbox size="lg" />
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-heading-3">With label</h3>
        <div className="space-y-4 mt-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms-1" />
            <Label htmlFor="terms-1">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms-2" disabled />
            <Label htmlFor="terms-2">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms-3" variant="error" />
            <Label htmlFor="terms-3">Accept terms and conditions</Label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckboxExample;
