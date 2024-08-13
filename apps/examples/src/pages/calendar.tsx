"use client";

import * as React from "react";

import dayjs from "dayjs";

import { Calendar } from "@borabaloglu/ui";
import { DateRange } from "react-day-picker";

const SingleCalendar = () => {
  const initiallySelectedDate = dayjs().add(1, "day").toDate();
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    initiallySelectedDate
  );

  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      showOutsideDays={true}
      className="rounded-md border border-semantic-border-subtle mt-2"
    />
  );
};

const MultipleCalendar = () => {
  const initiallySelectedDates = [
    dayjs().add(1, "day").toDate(),
    dayjs().add(2, "day").toDate(),
  ];

  const [selectedDates, setSelectedDates] = React.useState<Date[] | undefined>(
    initiallySelectedDates
  );

  return (
    <Calendar
      mode="multiple"
      selected={selectedDates}
      onSelect={setSelectedDates}
      showOutsideDays={true}
      className="rounded-md border border-semantic-border-subtle mt-2"
    />
  );
};

const RangeCalendar = () => {
  const initialRange: DateRange = {
    from: dayjs().toDate(),
    to: dayjs().add(4, "day").toDate(),
  };

  const [range, setRange] = React.useState<DateRange | undefined>(initialRange);

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      showOutsideDays={true}
      className="rounded-md border border-semantic-border-subtle mt-2"
    />
  );
};

const CalendarExample = () => {
  return (
    <>
      <div className="w-max">
        <h3 className="text-heading-3">Single</h3>
        <SingleCalendar />
      </div>
      <div className="mt-4 w-max">
        <h3 className="text-heading-3">Multiple</h3>
        <MultipleCalendar />
      </div>
      <div className="mt-4 w-max">
        <h3 className="text-heading-3">Range</h3>
        <RangeCalendar />
      </div>
    </>
  );
};

export default CalendarExample;
