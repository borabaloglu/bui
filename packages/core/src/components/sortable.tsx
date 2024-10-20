import React from "react";

import type { CSSProperties, PropsWithChildren, ReactNode } from "react";

import type {
  Active,
  DraggableAttributes,
  DropAnimation,
  UniqueIdentifier,
} from "@dnd-kit/core";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  defaultDropAnimationSideEffects,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cx } from "class-variance-authority";

import { createElementContext } from "@hooks/use-context.hook";
import { cn } from "@utils/component.util";

/* -------------------------------------------------------------------------------------------------
 * Sortable Overlay
 * -----------------------------------------------------------------------------------------------*/

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.4",
      },
    },
  }),
};

function SortableOverlay({ children }: PropsWithChildren) {
  return (
    <DragOverlay dropAnimation={dropAnimationConfig}>{children}</DragOverlay>
  );
}

/* -------------------------------------------------------------------------------------------------
 * Sortable Item
 * -----------------------------------------------------------------------------------------------*/

interface SortablItemProps {
  id: UniqueIdentifier;
}

interface SortableItemContext {
  attributes: DraggableAttributes;
  listeners?: SyntheticListenerMap;
  ref: (element: HTMLElement | null) => void;
}

export const [SortableContextProvider, useSortableContext] =
  createElementContext<SortableItemContext>(
    "Sortable compound components cannot be rendered outside the Sortable component"
  );

function SortableItem({ children, id }: PropsWithChildren<SortablItemProps>) {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id });
  const context: SortableItemContext = React.useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef,
    }),
    [attributes, listeners, setActivatorNodeRef]
  );

  const style: CSSProperties = {
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Translate.toString(transform),
    transition,
    listStyle: "none",
  };

  return (
    <SortableContextProvider value={context}>
      <li ref={setNodeRef} style={style}>
        {children}
      </li>
    </SortableContextProvider>
  );
}

const SortableDragHandler = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { attributes, listeners, ref: activatorRef } = useSortableContext();

  return (
    <button
      className={cn(
        "flex cursor-move items-center justify-center p-2",
        className
      )}
      {...attributes}
      {...listeners}
      {...props}
      ref={ref ?? activatorRef}
    />
  );
});

/* -------------------------------------------------------------------------------------------------
 * Sortable List
 * -----------------------------------------------------------------------------------------------*/

interface SortableListProps<T extends SortablItemProps>
  extends Omit<React.HTMLAttributes<HTMLUListElement>, "onChange"> {
  items: T[];
  onChange?(items: T[]): void;
  renderItem(item: T, index: number): ReactNode;
  onMove?(source: number, destination: number): void;
}

function SortableList<T extends SortablItemProps>({
  items,
  onChange,
  onMove,
  renderItem,
  className,
}: SortableListProps<T>) {
  const [active, setActive] = React.useState<Active | null>(null);

  const activeItem = React.useMemo(
    () => items.find((item) => item.id === active?.id),
    [active, items]
  );
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      onDragStart={({ active }) => {
        setActive(active);
      }}
      onDragEnd={({ active, over }) => {
        if (over && active.id !== over?.id) {
          const activeIndex = items.findIndex(({ id }) => id === active.id);
          const overIndex = items.findIndex(({ id }) => id === over.id);

          onChange?.(arrayMove(items, activeIndex, overIndex));
          onMove?.(activeIndex, overIndex);
        }
        setActive(null);
      }}
      onDragCancel={() => {
        setActive(null);
      }}
    >
      <SortableContext items={items}>
        <ul
          className={cx("flex list-none flex-col gap-4 p-0", className)}
          role="application"
        >
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              {renderItem(item, index)}
            </React.Fragment>
          ))}
        </ul>
      </SortableContext>
      <SortableOverlay>
        {activeItem ? renderItem(activeItem, 0) : null}
      </SortableOverlay>
    </DndContext>
  );
}

SortableList.Item = SortableItem;
SortableList.DragHandle = SortableDragHandler;

export { SortableList, SortableItem, SortableDragHandler };
