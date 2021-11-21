import { ComponentMeta, Story } from "@storybook/react";
import { MinesweeperGameName } from "./GameName.stories";
import { Top, TopComponentType } from "./Top";
import { GameLegend } from './Legend.stories';

export default {
  title: "Top/Top",
  component: Top,
} as ComponentMeta<typeof Top>;

const Template: Story<TopComponentType> = (args) => <Top {...args} />;

export const TopPanel = Template.bind({});
TopPanel.args = {
  ...MinesweeperGameName.args,
  ...GameLegend.args,
};
