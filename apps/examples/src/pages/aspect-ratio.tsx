import Image from "next/image";

import { AspectRatio } from "@borabaloglu/ui";

const AspectRatioExample = () => {
  return (
    <>
      <div className="max-w-md">
        <h2 className="text-heading-3">16 / 9</h2>
        <AspectRatio ratio={16 / 9} className="mt-2">
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <div className="max-w-md mt-4">
        <h2 className="text-heading-3">21 / 9</h2>
        <AspectRatio ratio={21 / 9} className="mt-2">
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <div className="max-w-md mt-4">
        <h2 className="text-heading-3">9 / 16</h2>
        <AspectRatio ratio={9 / 16} className="mt-2">
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </>
  );
};

export default AspectRatioExample;
