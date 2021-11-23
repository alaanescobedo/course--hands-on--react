import { ComponentMeta, Story } from "@storybook/react";
import { Reset, ResetProps } from "./Reset";
export default {
  title: "Scoreboard/Reset",
  component: Reset,
} as ComponentMeta<typeof Reset>;

const Template: Story<ResetProps> = (args) => <Reset {...args} />;

export const ResetButton = Template.bind({});
