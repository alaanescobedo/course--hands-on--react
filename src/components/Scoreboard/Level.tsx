import styled from "@emotion/styled";
import { FC } from "react";

export interface LevelProps {
  /**
   * Array of possible game levels
   */
  children: string[];
}

export const Level: FC<LevelProps> = ({ children }) => (
  <Select>{children.map((item:string)=> (
    <Option key={item} value={item} >{item}</Option>
  ))}</Select>
);

const Select = styled.select`
  margin: 0;
  height: 2.5vw;
  border-radius: 0;
  border: 0ch.15vw solid;
  border-color: #fff #9e9e9e #9e9e9e #fff;
  background-color: #d1d1d1d1;
`;

const Option = styled.option`
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0 0.2vw 0.2vw;
`;
