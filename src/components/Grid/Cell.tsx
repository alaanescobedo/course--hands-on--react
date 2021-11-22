import styled from "@emotion/styled";
import { FC, MouseEvent } from "react";
import { Cell as CellType, CellState, Coords } from "@/helpers/Field";
import { useMouse } from "../hooks/useMouse";

export interface CellProps {
  /**
   * Cell status based on the CellType
   */
  children: CellType;
  /**
   * Cell coordinates
   */
  coords: Coords;
  /**
   * onClick by cell handler
   */
  onClick: (coords: Coords) => void;
  /**
   * onContextMenu by cell handler
   */
  onContextMenu: (coords: Coords) => void;
}

export const isActiveCell = (cell: CellType): boolean =>
  [CellState.hidden, CellState.flag, CellState.weakFlag].includes(cell);

export const Cell: FC<CellProps> = ({ children, coords, ...rest }) => {
  const [mouseDown, setMouseDown, setMouseUp] = useMouse();

  const onContextMenu = (elem: MouseEvent<HTMLElement>) => {
    /**
     * Prevent context menu by default
     */
    elem.preventDefault();
    if (isActiveCell(children)) {
      rest.onContextMenu(coords);
    }
  };

  const onClick = () => {
    if (isActiveCell(children)) {
      rest.onClick(coords);
    }
  };

  const onMouseDown = () => {
    if (isActiveCell(children)) {
      setMouseDown();
    }
  };

  const onMouseUp = () => {
    if (isActiveCell(children)) {
      setMouseUp();
    }
  };

  const props = {
    onClick,
    mouseDown,
    onContextMenu,
    onMouseDown,
    onMouseUp,
    onMouseLeave: onMouseUp,
    "data-testid": `${children}_${coords}`,
  };

  return <ComponentsMap {...props}>{children}</ComponentsMap>;
};

interface ComponentsMapProps {
  children: CellType;
  mouseDown: boolean;
  onClick: (elem: MouseEvent<HTMLElement>) => void;
  onContextMenu: (elem: MouseEvent<HTMLElement>) => void;
  "data-testid"?: string;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
}

const ComponentsMap: FC<ComponentsMapProps> = ({ children, ...rest }) => {
  switch (children) {
    case CellState.empty:
      return <RevealedFrame {...rest} />;
    case CellState.hidden:
      return <ClosedFrame {...rest} />;
    case CellState.bomb:
      return (
        <BombFrame {...rest}>
          <Bomb />
        </BombFrame>
      );
    case CellState.flag:
      return (
        <ClosedFrame {...rest}>
          <Flag />
        </ClosedFrame>
      );
    case CellState.weakFlag:
      return (
        <ClosedFrame {...rest}>
          <WeaKFlag />
        </ClosedFrame>
      );
    default:
      return <RevealedFrame {...rest}>{children}</RevealedFrame>;
  }
};

interface ClosedFrameProps {
  mouseDown: boolean;
}

const ClosedFrame = styled.div<ClosedFrameProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  width: 1.8vw;
  height: 1.8vw;
  background-color: #d1d1d1;
  border: 0.6vh solid transparent;
  border-color: ${({ mouseDown = false }) =>
    mouseDown ? "transparent" : "#fff #9e9e9e #9e9e9e #fff"};
  &:hover {
    filter: brightness(1.1);
  }
`;

const transparent = "rgba(0,0,0,0)";
const colors: { [key in CellType]: string } = {
  0: "#000",
  1: "#2a48ec",
  2: "#2bb13d",
  3: "#ec6561",
  4: "#233db7",
  5: "#a6070f",
  6: "#e400af",
  7: "#906a02",
  8: "#fa0707",
  9: transparent,
  10: transparent,
  11: transparent,
  12: transparent,
};

const RevealedFrame = styled(ClosedFrame)`
  border-color: #dddddd;
  cursor: default;
  color: ${({ children }) => colors[children as CellType] ?? transparent};
  &:hover {
    filter: brightness(1);
  }
`;

const Bomb = styled.div`
  border-radius: 50%;
  width: 1vw;
  height: 1vw;
  background-color: #333;
`;

const BombFrame = styled(RevealedFrame)`
  background-color: #ec433c;
`;

const Flag = styled.div`
  width: 0px;
  height: 0px;
  border-top: 0.5vw solid transparent;
  border-bottom: 0.5vw solid transparent;
  border-left: 0.5vw solid #ec433c;
`;

const WeaKFlag = styled(Flag)`
  border-left: 0.5vw solid #f19996;
`;
