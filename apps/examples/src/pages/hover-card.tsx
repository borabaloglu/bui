import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@borabaloglu/ui";
import { CalendarDays } from "lucide-react";

const HoverCardExample = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <p className="text-label-sm hover:underline cursor-pointer w-max">
          @nextjs
        </p>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-paragraph-sm font-semibold">@nextjs</h4>
            <p className="text-paragraph-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-label-xs text-semantic-fg-muted">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardExample;
