import styled from "@emotion/styled";
import { FC } from "react";

export interface CounterProps {
  /**
   * Number in the counter
   */
  children: string;
}

export const Counter: FC<CounterProps> = ({ children }) => (
  <Frame>{children}</Frame>
);

const Frame = styled.div`
  display: inline-block;
  padding: 0 0.3vw;
  color: #ec433c;
  border: 0.15vw inset;
  line-height: 2vw;
  letter-spacing: normal.08em;
  background: #333;
  text-shadow: 0 0 0.1vw;
`;
