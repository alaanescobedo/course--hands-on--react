import styled from "@emotion/styled";
import { FC } from "react";
import { GameName, GameNameProps } from "./GameName";
import { Legend, LegendsProps } from "./Legend";

export type TopComponentType = GameNameProps & LegendsProps;

export const Top: FC<TopComponentType> = ({ children, ...legendProps }) => (
  <Header>
    <GameName>{children}</GameName>
    <Legend {...legendProps} />
  </Header>
);

const Header = styled.header`
  text-align: center;
  position: relative;
  display: inline-inline-block;
`;
