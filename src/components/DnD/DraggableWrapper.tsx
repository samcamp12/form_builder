import * as React from "react";

import { useDrag, useDrop } from "react-dnd";
import { animated, useSpring, config } from "@react-spring/web";

interface IDraggableWrapperProps {
    id: number;
    moveItem: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
    id: number;
}

const ItemType = "FORM";

const DropTarget: React.FC<{
    id: number;
    moveItem: (dragIndex: number, hoverIndex: number) => void;
    isInserting: boolean;
}> = ({ id, moveItem, children, isInserting }) => {
    const [, ref] = useDrop({
        accept: ItemType,
        hover(item: DragItem) {
            if (item.id !== id) {
                moveItem(item.id, id);
            }
        },
    });

    const insertionAnimation = useSpring({
        marginTop: isInserting ? "20px" : "10px", // Animate margin to create slide-down effect
        config: config.stiff,
    });

    return (
        <div ref={ref} style={insertionAnimation as any}>
            {children}
        </div>
    );
};

export const DraggableWrapper: React.FC<IDraggableWrapperProps> = ({ id, moveItem, children }) => {
    const [bounce, setBounce] = React.useState<boolean>(false);
    const [isInserting, setIsInserting] = React.useState(false);

    const [{ isDragging }, drag] = useDrag({
        type: ItemType,
        item: { id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    React.useEffect(() => {
        if (isInserting) {
            const timer = setTimeout(() => {
                setIsInserting(false);
            }, 300); // Match this duration with the animation duration

            return () => {
                clearTimeout(timer);
            };
        }
        return () => {};
    }, [isInserting]);

    const springStyle = useSpring({
        to: {
            scale: isDragging ? 1.1 : bounce ? 1.05 : 1,
            opacity: isDragging ? 0.7 : 1,
        },
        config: isDragging ? config.wobbly : bounce ? config.gentle : config.stiff,
        onRest: () => {
            setBounce(false);
        },
    });

    return (
        <DropTarget id={id} moveItem={moveItem} isInserting={isInserting}>
            <animated.div
                ref={drag}
                style={{
                    cursor: "move",
                    ...springStyle,
                }}>
                {children}
            </animated.div>
        </DropTarget>
    );
};
