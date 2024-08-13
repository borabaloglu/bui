"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker } from "react-day-picker";

import { cn } from "@utils/component.util";

import { buttonVariants } from "@components/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-label-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "!h-8 !w-8 !p-0 border-semantic-border-subtle hover:bg-semantic-bg-subtle"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-semantic-fg-muted rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-label-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-semantic-accent-moderate [&:has([aria-selected].day-outside)]:bg-transparent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "text" }),
          "!h-8 !w-8 !p-0 font-normal text-semantic-fg-base"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "!bg-semantic-accent-moderate !text-semantic-accent-on-accent hover:bg-semantic-accent-moderate hover:!text-semantic-accent-on-accent focus:bg-semantic-accent-moderate focus:text-semantic-accent-on-accent",
        day_today:
          "bg-semantic-accent-subtle text-semantic-accent-on-accent hover:bg-semantic-accent-dim",
        day_outside:
          "day-outside text-semantic-fg-muted aria-selected:!bg-semantic-accent-subtle aria-selected:text-semantic-accent-on-accent",
        day_disabled: "",
        day_range_middle:
          "aria-selected:bg-semantic-accent-moderate aria-selected:text-semantic-accent-on-accent",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRightIcon className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
