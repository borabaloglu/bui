/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@borabaloglu/ui";
import Image from "next/image";
import * as React from "react";

const images = [
  "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/614.jpg",
  "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/16.jpg",
  "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/894.jpg",
  "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/531.jpg",
  "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/403.jpg",
];

const CarouselExample = () => {
  return (
    <>
      <div>
        <h3 className="text-heading-3">Single</h3>
        <Carousel
          className="w-full max-w-[200px] mt-2 ml-10"
          orientation="horizontal"
        >
          <CarouselContent>
            {images.map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <img src={_} className="w-full h-full" alt="avatar" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="mt-4">
        <h3 className="text-heading-3">Multiple</h3>
        <Carousel className="w-full max-w-sm mt-2 ml-10">
          <CarouselContent className="-ml-1">
            {images.map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <img src={_} className="w-full h-full" alt="avatar" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default CarouselExample;
