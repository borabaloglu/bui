import { Badge } from "@borabaloglu/ui";

const BadgeExample = () => {
  return (
    <>
      <h3 className="text-heading-3">Outline</h3>
      <div className="flex items-center space-x-4 mt-2">
        <Badge variant="default">Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
      </div>
      <h3 className="text-heading-3 mt-4">Filled</h3>
      <div className="flex items-center space-x-4 mt-2">
        <Badge variant="default" filled>
          Default
        </Badge>
        <Badge variant="success" filled>
          Success
        </Badge>
        <Badge variant="error" filled>
          Error
        </Badge>
        <Badge variant="warning" filled>
          Warning
        </Badge>
        <Badge variant="info" filled>
          Info
        </Badge>
      </div>
      <h3 className="text-heading-3 mt-4">Contrast</h3>
      <div className="flex items-center space-x-4 mt-2">
        <Badge variant="default" filled contrast>
          Default
        </Badge>
        <Badge variant="success" filled contrast>
          Success
        </Badge>
        <Badge variant="error" filled contrast>
          Error
        </Badge>
        <Badge variant="warning" filled contrast>
          Warning
        </Badge>
        <Badge variant="info" filled contrast>
          Info
        </Badge>
      </div>
    </>
  );
};

export default BadgeExample;
