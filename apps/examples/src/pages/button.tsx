import { Button } from "@borabaloglu/ui";
import { Ri24HoursLine } from "react-icons/ri";

const ButtonExamples = () => {
  return (
    <>
      <div className="space-y-4 flex flex-col">
        <div>
          <h1 className="text-heading-3">Filled</h1>
          <div className="space-x-4 mt-2 flex items-center">
            <Button variant="filled" size="sm" disabled>
              Button
            </Button>
            <Button variant="filled" size="sm">
              Button
            </Button>
            <Button variant="filled" size="md">
              Button
            </Button>
            <Button variant="filled" size="lg">
              Button
            </Button>
            <Button variant="filled" size="icon-sm">
              <Ri24HoursLine size={20} />
            </Button>
            <Button variant="filled" size="icon-md">
              <Ri24HoursLine size={20} />
            </Button>
            <Button variant="filled" size="icon-lg">
              <Ri24HoursLine size={20} />
            </Button>
          </div>
        </div>
        <h1 className="text-heading-3">Filled Tonal</h1>
        <div>
          <div className="space-x-4 mt-2">
            <Button variant="filledTonal" size="sm" disabled>
              Button
            </Button>
            <Button variant="filledTonal" size="sm">
              Button
            </Button>
            <Button variant="filledTonal" size="md">
              Button
            </Button>
            <Button variant="filledTonal" size="lg">
              Button
            </Button>
          </div>
        </div>
        <div>
          <h1 className="text-heading-3">Destructive</h1>
          <div className="space-x-4 mt-2">
            <Button variant="destructive" size="sm" disabled>
              Button
            </Button>
            <Button variant="destructive" size="sm">
              Button
            </Button>
            <Button variant="destructive" size="md">
              Button
            </Button>
            <Button variant="destructive" size="lg">
              Button
            </Button>
          </div>
        </div>
        <div>
          <h1 className="text-heading-3">Outline</h1>
          <div className="space-x-4 mt-2">
            <Button variant="outline" size="sm" disabled>
              Button
            </Button>
            <Button variant="outline" size="sm">
              Button
            </Button>
            <Button variant="outline" size="md">
              Button
            </Button>
            <Button variant="outline" size="lg">
              Button
            </Button>
          </div>
        </div>
        <div>
          <h1 className="text-heading-3">Text</h1>
          <div className="space-x-4 mt-2">
            <Button variant="text" size="sm" disabled>
              Button
            </Button>
            <Button variant="text" size="sm">
              Button
            </Button>
            <Button variant="text" size="md">
              Button
            </Button>
            <Button variant="text" size="lg">
              Button
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonExamples;
