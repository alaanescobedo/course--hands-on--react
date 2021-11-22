import { Legend, LegendsProps } from "./Legend";
import { ComponentMeta, Story } from "@storybook/react";

export default {
  title: "Top/Legend",
  component: Legend,
} as ComponentMeta<typeof Legend>;

const Template: Story<LegendsProps> = (args) => <Legend {...args} />;

export const GameLegend = Template.bind({});
GameLegend.args = {
  feature: "Flag",
  firstAction: "Ctrl",
  secondAction: "Click",
};
