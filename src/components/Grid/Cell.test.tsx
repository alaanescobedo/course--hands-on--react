import { render, screen, fireEvent, createEvent } from "@testing-library/react";

import { Coords, CellState } from "@/helpers/Field";
import { Cell, isActiveCell } from './Cell';

describe("Cell Component", () => {
  const coords: Coords = [1, 1];
  for (let cell = CellState.empty; cell <= CellState.weakFlag; cell++) {
    test("check prevent default contextMenu for every type of cell", () => {
      const props = {
        coords,
        onClick: jest.fn(),
        onContextMenu: jest.fn(),
      };

      render(<Cell {...props}>{cell}</Cell>);

      const cellComponent = screen.getByTestId(`${cell}_${coords}`);

      const contextMenuEvent = createEvent.contextMenu(cellComponent);

      fireEvent(cellComponent, contextMenuEvent);

      expect(contextMenuEvent.defaultPrevented).toBe(true);
    });
    test("onClick and onContextMenu hanler should be called only for active cells", () => {
      const props = {
        coords,
        onClick: jest.fn(),
        onContextMenu: jest.fn(),
      };

      render(<Cell {...props}>{cell}</Cell>);

      const cellComponent = screen.getByTestId(`${cell}_${coords}`);

      fireEvent.click(cellComponent);
      fireEvent.contextMenu(cellComponent);

      if (isActiveCell(cell)) {
        expect(props.onClick).toHaveBeenCalled();
        expect(props.onContextMenu).toHaveBeenCalled();
      } else {
        expect(props.onClick).not.toHaveBeenCalled();
        expect(props.onContextMenu).not.toHaveBeenCalled();
      }
    });
  }
});
