import { Story } from "@storybook/react";
import { Counter, CounterProps } from "./Counter";

export default {
  title: "Scoreboard/Counter",
  component: Counter,
};

const Template: Story<CounterProps> = (args) => <Counter {...args} />;

export const CounterExample = Template.bind({});
CounterExample.args = {
  children: "10",
};
