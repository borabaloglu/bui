import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@borabaloglu/ui";
import { RocketIcon } from "@radix-ui/react-icons";

const AlertExample = () => {
  return (
    <>
      <h2 className="text-heading-3">Default</h2>
      <Alert className="mt-2">
        <AlertIcon>
          <RocketIcon className="h-4 w-4" />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <h2 className="text-heading-3 mt-4">Destructive</h2>
      <Alert className="mt-2" variant="destructive">
        <AlertIcon>
          <RocketIcon className="h-4 w-4" />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <h2 className="text-heading-3 mt-4">Warning</h2>
      <Alert className="mt-2" variant="warning">
        <AlertIcon>
          <RocketIcon className="h-4 w-4" />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </AlertContent>
      </Alert>
    </>
  );
};

export default AlertExample;
