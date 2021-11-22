import { Scoreboard, ScoreboardProps } from "./ScoreBoard";
import { ComponentMeta, Story } from "@storybook/react";

export default {
  title: "Scoreboard/Scoreboard",
  component: Scoreboard,
} as ComponentMeta<typeof Scoreboard>;

const Template: Story<ScoreboardProps> = (args) => <Scoreboard {...args} />;

export const ScoreboardExample = Template.bind({});
ScoreboardExample.args = {
  time: "000",
  levels: ["Begginer", "Intermediate", "Expert"],
  mines: "010",
};
