import { DroppableCell } from "../atoms/DroppableCell";
import { DraggableCell } from "../atoms/DraggableCell";

export const Grid = ({
  qntCols = 1,
  qntRows = 1,
  type = "default",
  store = {},
}) => {
  const gridTemplateColumns = {
    gridTemplateColumns: `repeat(${qntCols}, minmax(0, 1fr))`,
  };
  return (
    <div style={gridTemplateColumns} className={`grid w-fit gap-1`}>
      {Array.from({ length: qntRows }).map((_, row) =>
        Array.from({ length: qntCols }).map((_, col) => {
          const item = store[`${row},${col}`];
          return (
            <DroppableCell
              key={`${row},${col}`}
              cell={{ position: `${row},${col}`, hasChild:!!item }}
              widthShape={40}
              heightShape={40}
            >
              {item?.isMainCell && (
                <DraggableCell
                  key={`item-${item.id}`}
                  className={""}
                  widthShape={40 + 2}
                  heightShape={40 + 2}
                  item={{ ...item, position: `${row},${col}` }}
                />
              )}
            </DroppableCell>
          );
        })
      )}
    </div>
  );
};
