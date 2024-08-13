import { Textarea } from "@borabaloglu/ui";

const TextareaExample = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-heading-3">Default</h3>
        <Textarea className="mt-2" placeholder="Type your message here." />
      </div>
      <div>
        <h3 className="text-heading-3">Disabled</h3>
        <Textarea
          className="mt-2"
          placeholder="Type your message here."
          disabled
        />
      </div>
      <div>
        <h3 className="text-heading-3">Error</h3>
        <Textarea
          className="mt-2"
          placeholder="Type your message here."
          error
        />
      </div>
    </div>
  );
};

export default TextareaExample;
