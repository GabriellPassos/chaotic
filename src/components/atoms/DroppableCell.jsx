import { useDroppable } from "@dnd-kit/core";
export const DroppableCell = ({
  className,
  children,
  cell = { position: `0,0`, type: "default", hasChild: false },
  widthShape = 54,
  heightShape = 54,
}) => {
  const { setNodeRef } = useDroppable({
    id: cell.position,
    data: { type: cell.type, occupied: cell.hasChild },
  });
  const style = {
    width: `${widthShape}px`,
    height: `${heightShape}px`,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${className} bg-neutral-secondary-120`}
    >
      {children}
    </div>
  );
};
