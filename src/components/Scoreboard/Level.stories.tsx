import { Story } from "@storybook/react";
import { Level, LevelProps } from "./Level";

export default {
  title: "Scoreboard/Level",
  component: Level,
};

const Template: Story<LevelProps> = (args) => <Level {...args} />;

export const LevelExample = Template.bind({});
LevelExample.args = {
  children: ["Beginner", "Intermediate", "Expert"],
};
