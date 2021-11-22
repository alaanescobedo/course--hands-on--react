import styled from "@emotion/styled";
import { FC } from "react";
import { Cell as CellType, CellState } from "@/helpers/Field";

export interface CellProps {
  children: CellType;
}

export const Cell: FC<CellProps> = ({ children }) => {
  switch (children) {
    case CellState.empty:
      return <EmptyFrame />;
    case CellState.hidden:
      return <ClosedFrame />;
    default:
      return <ClosedFrame />;
  }
};

const ClosedFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  width: 1.8vw;
  height: 1.8vw;
  background-color: #d1d1d1;
  border: 0.6vh solid transparent;
  border-color: #fff #9e9e9e #9e9e9e #fff;
  &:hover {
    filter: brightness(1.1);
  }
`;

const EmptyFrame = styled(ClosedFrame)`
  border-color: #dddddd;
  cursor: default;
  &:hover {
    filter: brightness(1);
  }
`;
