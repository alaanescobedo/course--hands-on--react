import { Story } from "@storybook/react";
import { GameName, GameNameProps } from "./GameName";

export default {
  title: "Top/GameName",
  component: GameName,
};

const Template: Story<GameNameProps> = (args) => <GameName {...args} />;

export const MinesweeperGameName = Template.bind({});
MinesweeperGameName.args = {
  children: "Minesweeper",
};
