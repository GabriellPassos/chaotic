import { useDraggable } from "@dnd-kit/core";

export const DraggableCell = ({
  className,
  item,
  widthShape = 54,
  heightShape = 54,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.id,
    data: { position: item.position, size: item.size },
  });
  let style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  style = {
    ...style,
    width: `${widthShape}px`,
    height: `${heightShape}px`,
  };
  const styleBackground = {
    width: `${item.size.w  * widthShape}px`,
    height: `${item.size.h  * heightShape}px`,
  };
  return (
    <div
      style={styleBackground}
      {...attributes}
      {...listeners}
      className="bg-white relative"
    >
      <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        style={style}
        className={`${className} bg-black `}
      >
        {item.name}
      </div>
    </div>
  );
};
