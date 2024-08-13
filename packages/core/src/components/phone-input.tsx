import { CheckIcon, ChevronsUpDown } from "lucide-react";

import * as React from "react";

import * as RPNInput from "react-phone-number-input";

import flags from "react-phone-number-input/flags";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@components/command";
import { Input, InputProps } from "@components/input";
import { Popover, PopoverContent, PopoverTrigger } from "@components/popover";
import { ScrollArea } from "@components/scroll-area";

import { cn } from "@utils/component.util";

type PhoneInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
> &
  Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    inputProps?: InputProps;
  };

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
  React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
    ({ className, onChange, inputProps, buttonProps, ...props }, ref) => {
      return (
        <RPNInput.default
          ref={ref}
          className={cn("flex", className)}
          flagComponent={FlagComponent}
          countrySelectComponent={CountrySelect}
          countrySelectProps={{
            buttonProps,
          }}
          inputComponent={InputComponent}
          numberInputProps={inputProps}
          /**
           * Handles the onChange event.
           *
           * react-phone-number-input might trigger the onChange event as undefined
           * when a valid phone number is not entered. To prevent this,
           * the value is coerced to an empty string.
           *
           * @param {E164Number | undefined} value - The entered value
           */
          onChange={(value) => onChange?.(value || ("" as RPNInput.Value))}
          {...props}
        />
      );
    }
  );
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <Input
      className="w-full"
      inputClassName={cn("rounded-s-none", className)}
      {...props}
      ref={ref}
    />
  )
);
InputComponent.displayName = "InputComponent";

type CountrySelectOption = { label: string; value: RPNInput.Country };

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  onChange: (value: RPNInput.Country) => void;
  options: CountrySelectOption[];
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
  buttonProps,
}: CountrySelectProps) => {
  const handleSelect = React.useCallback(
    (country: RPNInput.Country) => {
      onChange(country);
    },
    [onChange]
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          {...buttonProps}
          disabled={disabled}
          className={cn(
            "flex px-3 bg-semantic-bg-canvas text-semantic-fg-subtle items-center justify-center border border-semantic-border-subtle border-r-0 gap-x-1 rounded-e-none rounded-s-md hover:bg-semantic-bg-subtle transition-all z-[1]",
            buttonProps?.className
          )}
        >
          <FlagComponent country={value} countryName={value} />
          <ChevronsUpDown
            className={cn("-mr-1 h-4 w-4", disabled ? "hidden" : "block")}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandList>
            <ScrollArea className="h-72">
              <CommandInput placeholder="Search country..." />
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {options
                  .filter((x) => x.value)
                  .map((option) => (
                    <CommandItem
                      className="gap-2"
                      key={option.value}
                      onSelect={() => handleSelect(option.value)}
                    >
                      <CheckIcon
                        className={cn(
                          "h-4 w-4",
                          option.value === value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      <FlagComponent
                        country={option.value}
                        countryName={option.label}
                      />
                      <span className="flex-1 text-label-sm">
                        {option.label}
                      </span>
                      {option.value && (
                        <span className="text-label-sm text-semantic-fg-base opacity-60">
                          {`+${RPNInput.getCountryCallingCode(option.value)}`}
                        </span>
                      )}
                    </CommandItem>
                  ))}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className="bg-semantic-bg-subtle flex h-4 w-6 overflow-hidden rounded-sm">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};
FlagComponent.displayName = "FlagComponent";

export { PhoneInput };
