import {
  SortableDragHandler,
  SortableItem,
  SortableList,
} from "@borabaloglu/ui";
import React from "react";
import { RiDragDropLine } from "react-icons/ri";

const SortableExample = () => {
  const [items, setItems] = React.useState([
    { id: "1", name: "Item 1" },
    { id: "2", name: "Item 2" },
    { id: "3", name: "Item 3" },
    { id: "4", name: "Item 4" },
    { id: "5", name: "Item 5" },
  ]);

  return (
    <SortableList
      items={items}
      onMove={(source, destination) => {
        const newItems = [...items];
        const [removed] = newItems.splice(source, 1);
        newItems.splice(destination, 0, removed);
        setItems(newItems);
      }}
      renderItem={(item, index) => (
        <SortableItem id={item.id}>
          <div
            key={item.id}
            className="flex items-center gap-4 border border-semantic-border-subtle px-2 py-4 "
          >
            <SortableDragHandler className="text-semantic-fg-base">
              <RiDragDropLine />
            </SortableDragHandler>
            <p>{item.name}</p>
          </div>
        </SortableItem>
      )}
    />
  );
};

export default SortableExample;
