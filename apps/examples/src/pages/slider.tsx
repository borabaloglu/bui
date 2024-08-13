import { Slider } from "@borabaloglu/ui";
import { cx } from "class-variance-authority";

const SliderExample = () => {
  return (
    <>
      <div>
        <h3 className="text-heading-3">Default</h3>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className="w-[60%] mt-2"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-heading-3">Disabled</h3>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className="w-[60%] mt-2"
          disabled
        />
      </div>
    </>
  );
};

export default SliderExample;
