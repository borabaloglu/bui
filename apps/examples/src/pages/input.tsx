import { Input } from "@borabaloglu/ui";
import { TbMail, TbEyeClosed, TbKey } from "react-icons/tb";

const InputExample = () => {
  return (
    <>
      <div className="flex flex-col space-y-4 w-full">
        <div className="space-y-2 w-full">
          <h3 className="text-heading-3">Default</h3>
          <Input className="w-full" type="email" placeholder="Email" />
        </div>
        <div className="space-y-2 w-full">
          <h3 className="text-heading-3">Disabled</h3>
          <Input className="w-full" type="email" placeholder="Email" disabled />
        </div>
        <div className="space-y-2 w-full">
          <h3 className="text-heading-3">Error</h3>
          <Input className="w-full" type="email" placeholder="Email" error />
        </div>
        <div className="space-y-2 w-full">
          <h3 className="text-heading-3">With Leading Icon</h3>
          <Input
            className="w-full"
            type="email"
            placeholder="Email"
            leadingIcon={<TbMail size={20} />}
          />
        </div>
        <div className="space-y-2 w-full">
          <h3 className="text-heading-3">With Trailing Icon</h3>
          <Input
            className="w-full"
            type="text"
            placeholder="Password"
            trailingIcon={
              <TbEyeClosed
                size={20}
                onClick={() => {
                  alert("Eye icon clicked");
                }}
              />
            }
          />
        </div>
        <div className="space-y-2 w-full">
          <h3 className="text-heading-3">With Both Icon</h3>
          <Input
            className="w-full"
            type="text"
            placeholder="Password"
            leadingIcon={<TbKey size={20} />}
            trailingIcon={
              <TbEyeClosed
                size={20}
                onClick={() => {
                  alert("Eye icon clicked");
                }}
              />
            }
          />
        </div>
      </div>
    </>
  );
};

export default InputExample;
