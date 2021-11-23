import { FC } from "react";
import styled from "@emotion/styled";

import { Field, Coords } from "@/helpers/Field";
import { Cell } from "./Cell";

export interface GridProps {
  /**
   * Field Data
   */
  children: Field;
  /**
   * onClick handler
   */
  onClick: (coords: Coords) => void;
  /**
   * onContextMenu handler
   */
  onContextMenu: (coords: Coords) => void;
}
export const Grid: FC<GridProps> = ({ children, ...rest }) => (
  <Wrapper size={children.length}>
    {children.map((row, coordY) =>
      row.map((cell, coordX) => (
        <Cell
          key={`${coordY}_${coordX}_${cell}`}
          coords={[coordY, coordX]}
          {...rest}
        >
          {cell}
        </Cell>
      ))
    )}
  </Wrapper>
);

interface WrapperProps {
  size: number;
}

const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: repeat(${({ size }) => size}, auto);
  width: max-content;
  padding: 1vw;
`;
