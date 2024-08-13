"use client";

import * as React from "react";

import { ChevronDown, X } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "@components/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@components/command";

import { cn } from "@utils/component.util";

interface MultiSelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  options: {
    label: string;
    value: string;
  }[];
  defaultValue?: string[];
  placeholder: string;
  className?: string;
  onValueChange: (value: string[]) => void;
}

const MultiSelect = React.forwardRef<HTMLButtonElement, MultiSelectProps>(
  (
    {
      className,
      asChild = false,
      options,
      defaultValue,
      onValueChange,
      disabled,
      placeholder,
      ...props
    },
    ref
  ) => {
    const [selectedValues, setSelectedValues] = React.useState<string[]>(
      defaultValue || []
    );
    const selectedValuesSet = React.useRef(new Set(selectedValues));
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

    React.useEffect(() => {
      setSelectedValues(defaultValue || []);
      selectedValuesSet.current = new Set(defaultValue);
    }, [defaultValue]);

    const handleInputKeyDown = (event: any) => {
      if (event.key === "Enter") {
        setIsPopoverOpen(true);
      } else if (event.key === "Backspace" && !event.target.value) {
        selectedValues.pop();
        setSelectedValues([...selectedValues]);
        selectedValuesSet.current.delete(
          selectedValues[selectedValues.length - 1]
        );
        onValueChange([...selectedValues]);
      }
    };

    const toggleOption = (value: string) => {
      if (selectedValuesSet.current.has(value)) {
        selectedValuesSet.current.delete(value);
        setSelectedValues(selectedValues.filter((v) => v !== value));
      } else {
        selectedValuesSet.current.add(value);
        setSelectedValues([...selectedValues, value]);
      }
      onValueChange(Array.from(selectedValuesSet.current));
    };

    return (
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild disabled={disabled}>
          <button
            ref={ref}
            {...props}
            className="flex w-full items-center justify-between gap-x-4 rounded-md border border-semantic-border-subtle bg-semantic-bg-canvas px-3 py-2 min-h-10 text-label-sm text-semantic-fg-base focus:outline-none focus:border-semantic-accent-moderate disabled:cursor-not-allowed disabled:border-semantic-border-disabled disabled:bg-semantic-bg-disabled disabled:text-semantic-fg-disabled [&>span]:line-clamp-1 hover:border-semantic-border-muted focus-visible:shadow-focus-accent placeholder:text-semantic-fg-subtle focus-visible:outline-none focus-visible:border-semantic-accent-moderate disabled:placeholder-semantic-fg-disabled"
          >
            {selectedValues.length > 0 ? (
              <div className="flex flex-1 flex-wrap items-center gap-2">
                {selectedValues.map((value) => {
                  const option = options.find((o) => o.value === value);
                  return (
                    <div
                      key={value}
                      className="flex items-center px-2 h-[22px] gap-x-2 bg-semantic-bg-subtle rounded-sm text-label-sm"
                    >
                      {option?.label}
                      <X
                        className="size-4 cursor-pointer opacity-50 hover:opacity-100 transition-all"
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleOption(value);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              placeholder
            )}
            <ChevronDown className={cn("h-4 w-4")} />
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[var(--radix-popover-trigger-width)]"
          align="start"
          onEscapeKeyDown={() => setIsPopoverOpen(false)}
        >
          {selectedValues.length === options.length ? (
            <p className="text-center text-label-sm">No options available.</p>
          ) : (
            <Command>
              <CommandInput
                placeholder="Search..."
                onKeyDown={handleInputKeyDown}
              />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {options
                    .filter((option) => !selectedValues.includes(option.value))
                    .map((option) => (
                      <CommandItem
                        key={option.value}
                        onSelect={() => toggleOption(option.value)}
                      >
                        {option.label}
                      </CommandItem>
                    ))}
                </CommandGroup>
              </CommandList>
            </Command>
          )}
        </PopoverContent>
      </Popover>
    );
  }
);

export { MultiSelect };
