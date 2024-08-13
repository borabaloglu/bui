import { Steps } from "@borabaloglu/ui";

const StepsExample = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-heading-3">Bar</h3>
        <Steps variant="bar" steps={4} current={2} />
      </div>
      <div className="space-y-2">
        <h3 className="text-heading-3">Dot</h3>
        <Steps variant="dot" steps={4} current={2} />
      </div>
    </div>
  );
};

export default StepsExample;
