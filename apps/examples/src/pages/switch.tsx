import { Label, Switch } from "@borabaloglu/ui";

const SwitchExample = () => {
  return (
    <>
      <h3 className="text-heading-3">Enabled</h3>
      <div className="flex items-center space-x-2 mt-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <h3 className="text-heading-3 mt-4">Disabled</h3>
      <div className="flex items-center space-x-2 mt-2">
        <Switch id="airplane-mode-2" disabled />
        <Label htmlFor="airplane-mode-2">Airplane Mode</Label>
      </div>
    </>
  );
};

export default SwitchExample;
