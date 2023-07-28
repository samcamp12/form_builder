import * as React from "react";

import { useDrag, useDrop } from "react-dnd";

interface IDraggableWrapperProps {
    id: number;
    moveItem: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
    id: number;
}

const ItemType = "FORM";

export const DraggableWrapper: React.FC<IDraggableWrapperProps> = ({ id, moveItem, children }) => {
    const [{ isDragging }, drag] = useDrag({
        type: ItemType,
        item: { id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: ItemType,
        hover(item: DragItem) {
            if (item.id !== id) {
                moveItem(item.id, id);
            }
        },
    });

    return (
        <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
            {children}
        </div>
    );
};
