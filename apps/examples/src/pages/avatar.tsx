import { Avatar, AvatarFallback, AvatarImage } from "@borabaloglu/ui";

const AvatarExample = () => {
  return (
    <>
      <h3 className="text-heading-3">With Avatar</h3>
      <div className="flex items-center space-x-4 mt-2">
        <Avatar size="xs">
          <AvatarImage src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1111.jpg" />
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1111.jpg" />
        </Avatar>
        <Avatar size="md">
          <AvatarImage src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1111.jpg" />
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1111.jpg" />
        </Avatar>
        <Avatar size="xl">
          <AvatarImage src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1111.jpg" />
        </Avatar>
      </div>
      <h3 className="text-heading-3 mt-4">With Fallback</h3>
      <div className="flex items-center space-x-4 mt-2">
        <Avatar size="xs">
          <AvatarImage src="no-image" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="no-image" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar size="md">
          <AvatarImage src="no-image" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="no-image" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar size="xl">
          <AvatarImage src="no-image" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
      </div>
    </>
  );
};

export default AvatarExample;
