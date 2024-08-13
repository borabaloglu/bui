"use client";

import React from "react";
import { Input, InputProps } from "@components/input";
import { Button } from "@components/button";
import { type VariantProps } from "class-variance-authority";
import { CommandInput } from "@components/command";
import { TagPopover } from "@components/tag/tag-popover";
import { TagList } from "@components/tag/tag-list";
import { tagVariants } from "@components/tag/tag";
import { Autocomplete } from "@components/tag/autocomplete";
import { toast } from "@components/sonner";

export enum Delimiter {
  Comma = ",",
  Enter = "Enter",
}

type OmittedInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "value"
>;

export type Tag = {
  id: string;
  text: string;
};

export interface TagInputProps
  extends OmittedInputProps,
    VariantProps<typeof tagVariants> {
  placeholder?: string;
  tags: Tag[];
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
  enableAutocomplete?: boolean;
  autocompleteOptions?: Tag[];
  maxTags?: number;
  minTags?: number;
  disabled?: boolean;
  onTagAdd?: (tag: string) => void;
  onTagRemove?: (tag: string) => void;
  allowDuplicates?: boolean;
  validateTag?: (tag: string) => boolean;
  delimiter?: Delimiter;
  showCount?: boolean;
  placeholderWhenFull?: string;
  sortTags?: boolean;
  delimiterList?: string[];
  truncate?: number;
  minLength?: number;
  maxLength?: number;
  usePopoverForTags?: boolean;
  value?: string | number | readonly string[] | { id: string; text: string }[];
  autocompleteFilter?: (option: string) => boolean;
  direction?: "row" | "column";
  onInputChange?: (value: string) => void;
  customTagRenderer?: (tag: Tag) => React.ReactNode;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onTagClick?: (tag: Tag) => void;
  inputFieldPosition?: "bottom" | "top" | "inline";
  clearAll?: boolean;
  onClearAll?: () => void;
  inputProps?: InputProps;
  restrictTagsToAutocompleteOptions?: boolean;
}

const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  (props, ref) => {
    const {
      id,
      placeholder,
      tags,
      setTags,
      variant,
      size,
      shape,
      className,
      enableAutocomplete,
      autocompleteOptions,
      maxTags,
      delimiter = Delimiter.Comma,
      onTagAdd,
      onTagRemove,
      allowDuplicates,
      showCount,
      validateTag,
      placeholderWhenFull = "Max tags reached",
      sortTags,
      delimiterList,
      truncate,
      autocompleteFilter,
      textCase,
      animation,
      minLength,
      maxLength,
      direction = "row",
      onInputChange,
      customTagRenderer,
      onFocus,
      onBlur,
      onTagClick,
      inputFieldPosition = "bottom",
      clearAll = false,
      onClearAll,
      usePopoverForTags = false,
      inputProps = {},
      restrictTagsToAutocompleteOptions,
      disabled,
    } = props;

    const [inputValue, setInputValue] = React.useState("");
    const [tagCount, setTagCount] = React.useState(Math.max(0, tags.length));
    const inputRef = React.useRef<HTMLInputElement>(null);

    if (
      (maxTags !== undefined && maxTags < 0) ||
      (props.minTags !== undefined && props.minTags < 0)
    ) {
      console.warn("maxTags and minTags cannot be less than 0");
      // error
      return null;
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onInputChange?.(newValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        delimiterList
          ? delimiterList.includes(e.key)
          : e.key === delimiter || e.key === Delimiter.Enter
      ) {
        e.preventDefault();
        const newTagText = inputValue.trim();

        // Check if the tag is in the autocomplete options if restrictTagsToAutocomplete is true
        if (
          restrictTagsToAutocompleteOptions &&
          !autocompleteOptions?.some((option) => option.text === newTagText)
        ) {
          // error
          return;
        }

        if (validateTag && !validateTag(newTagText)) {
          return;
        }

        if (minLength && newTagText.length < minLength) {
          toast.error(`Tag must be at least ${minLength} characters long`);
          return;
        }

        // Validate maxLength
        if (maxLength && newTagText.length > maxLength) {
          toast.error(`Tag must be at most ${maxLength} characters long`);
          return;
        }

        const newTagId = crypto
          .getRandomValues(new Uint32Array(1))[0]
          .toString();

        if (
          newTagText &&
          (allowDuplicates || !tags.some((tag) => tag.text === newTagText)) &&
          (maxTags === undefined || tags.length < maxTags)
        ) {
          setTags([...tags, { id: newTagId, text: newTagText }]);
          onTagAdd?.(newTagText);
          setTagCount((prevTagCount) => prevTagCount + 1);
        }
        setInputValue("");
      }
    };

    const removeTag = (idToRemove: string) => {
      setTags(tags.filter((tag) => tag.id !== idToRemove));
      onTagRemove?.(tags.find((tag) => tag.id === idToRemove)?.text || "");
      setTagCount((prevTagCount) => prevTagCount - 1);
    };

    const onSortEnd = (oldIndex: number, newIndex: number) => {
      setTags((currentTags) => {
        const newTags = [...currentTags];
        const [removedTag] = newTags.splice(oldIndex, 1);
        newTags.splice(newIndex, 0, removedTag);

        return newTags;
      });
    };

    const handleClearAll = () => {
      onClearAll?.();
    };

    const filteredAutocompleteOptions = autocompleteFilter
      ? autocompleteOptions?.filter((option) => autocompleteFilter(option.text))
      : autocompleteOptions;

    const displayedTags = sortTags ? [...tags].sort() : tags;

    const truncatedTags = truncate
      ? tags.map((tag) => ({
          id: tag.id,
          text:
            tag.text?.length > truncate
              ? `${tag.text.substring(0, truncate)}...`
              : tag.text,
        }))
      : displayedTags;

    return (
      <div
        className={`w-full flex ${tags.length === 0 ? "gap-0" : "gap-3"} ${
          inputFieldPosition === "bottom"
            ? "flex-col"
            : inputFieldPosition === "top"
              ? "flex-col-reverse"
              : "flex-row"
        }`}
      >
        {!usePopoverForTags ? (
          <TagList
            tags={truncatedTags}
            customTagRenderer={customTagRenderer}
            variant={variant}
            size={size}
            shape={shape}
            textCase={textCase}
            animation={animation}
            onTagClick={onTagClick}
            onSortEnd={onSortEnd}
            onRemoveTag={removeTag}
            direction={direction}
            disabled={disabled}
          />
        ) : null}
        {enableAutocomplete ? (
          <div className="w-full max-w-[450px]">
            <Autocomplete
              tags={tags}
              setTags={setTags}
              autocompleteOptions={filteredAutocompleteOptions as Tag[]}
              maxTags={maxTags}
              onTagAdd={onTagAdd}
              allowDuplicates={allowDuplicates ?? false}
            >
              {!usePopoverForTags ? (
                <CommandInput
                  placeholder={
                    maxTags !== undefined && tags.length >= maxTags
                      ? placeholderWhenFull
                      : placeholder
                  }
                  ref={inputRef}
                  value={inputValue}
                  disabled={
                    disabled ||
                    (maxTags !== undefined && tags.length >= maxTags)
                  }
                  onChangeCapture={handleInputChange}
                  onKeyDown={handleKeyDown}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  className="w-full"
                />
              ) : (
                <TagPopover
                  tags={truncatedTags}
                  customTagRenderer={customTagRenderer}
                  variant={variant}
                  size={size}
                  shape={shape}
                  textCase={textCase}
                  animation={animation}
                  onTagClick={onTagClick}
                  onSortEnd={onSortEnd}
                  onRemoveTag={removeTag}
                  direction={direction}
                >
                  <CommandInput
                    placeholder={
                      maxTags !== undefined && tags.length >= maxTags
                        ? placeholderWhenFull
                        : placeholder
                    }
                    ref={inputRef}
                    value={inputValue}
                    disabled={
                      disabled ||
                      (maxTags !== undefined && tags.length >= maxTags)
                    }
                    onChangeCapture={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className="w-full"
                  />
                </TagPopover>
              )}
            </Autocomplete>
          </div>
        ) : (
          <div className="w-full">
            {!usePopoverForTags ? (
              <Input
                ref={inputRef}
                id={id}
                type="text"
                placeholder={
                  maxTags !== undefined && tags.length >= maxTags
                    ? placeholderWhenFull
                    : placeholder
                }
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={onFocus}
                onBlur={onBlur}
                {...inputProps}
                className={className}
                autoComplete={enableAutocomplete ? "on" : "off"}
                list={enableAutocomplete ? "autocomplete-options" : undefined}
                disabled={
                  disabled || (maxTags !== undefined && tags.length >= maxTags)
                }
              />
            ) : (
              <TagPopover
                tags={truncatedTags}
                customTagRenderer={customTagRenderer}
                variant={variant}
                size={size}
                shape={shape}
                textCase={textCase}
                animation={animation}
                onTagClick={onTagClick}
                onSortEnd={onSortEnd}
                onRemoveTag={removeTag}
                direction={direction}
              >
                <Input
                  ref={inputRef}
                  id={id}
                  type="text"
                  placeholder={
                    maxTags !== undefined && tags.length >= maxTags
                      ? placeholderWhenFull
                      : placeholder
                  }
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  {...inputProps}
                  className={className}
                  autoComplete={enableAutocomplete ? "on" : "off"}
                  list={enableAutocomplete ? "autocomplete-options" : undefined}
                  disabled={
                    disabled ||
                    (maxTags !== undefined && tags.length >= maxTags)
                  }
                />
              </TagPopover>
            )}
          </div>
        )}

        {showCount && maxTags && (
          <div className="flex">
            <span className="text-muted-foreground text-sm mt-1 ml-auto">
              {`${tagCount}`}/{`${maxTags}`}
            </span>
          </div>
        )}
        {clearAll && (
          <Button type="button" onClick={handleClearAll} className="mt-2">
            Clear All
          </Button>
        )}
      </div>
    );
  }
);

TagInput.displayName = "TagInput";

export { TagInput };
