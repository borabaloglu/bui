import { Button, toast } from "@borabaloglu/ui";

const SonnerExample = () => {
  return (
    <div className="flex flex-col space-y-4 max-w-sm">
      <Button
        variant="filledTonal"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
            cancel: {
              label: "Dismiss",
              onClick: () => console.log("Dismiss"),
            },
          })
        }
      >
        Show Default
      </Button>
      <Button
        variant="filledTonal"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
      >
        No buttons
      </Button>
      <Button
        variant="filledTonal"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        With Action Button
      </Button>
      <Button
        variant="filledTonal"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            cancel: {
              label: "Dismiss",
              onClick: () => console.log("Dismiss"),
            },
          })
        }
      >
        With Dismiss Button
      </Button>
      <Button
        variant="filledTonal"
        onClick={() =>
          toast.success("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
            cancel: {
              label: "Dismiss",
              onClick: () => console.log("Dismiss"),
            },
          })
        }
      >
        Show Success
      </Button>
      <Button
        variant="filledTonal"
        onClick={() =>
          toast.error("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
            cancel: {
              label: "Dismiss",
              onClick: () => console.log("Dismiss"),
            },
          })
        }
      >
        Show Error
      </Button>
      <Button
        variant="filledTonal"
        onClick={() =>
          toast.info("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
            cancel: {
              label: "Dismiss",
              onClick: () => console.log("Dismiss"),
            },
          })
        }
      >
        Show Info
      </Button>
      <Button
        variant="filledTonal"
        onClick={() =>
          toast.warning("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
            cancel: {
              label: "Dismiss",
              onClick: () => console.log("Dismiss"),
            },
          })
        }
      >
        Show Warning
      </Button>
      <Button
        variant="filledTonal"
        onClick={() =>
          toast.loading("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
            cancel: {
              label: "Dismiss",
              onClick: () => console.log("Dismiss"),
            },
          })
        }
      >
        Show Loading
      </Button>
    </div>
  );
};

export default SonnerExample;
