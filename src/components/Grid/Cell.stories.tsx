import { Cell, CellProps } from "./Cell";
import { ComponentMeta, Story } from "@storybook/react";
export default {
  title: "Grid/Cell",
  component: Cell,
} as ComponentMeta<typeof Cell>;

const Template: Story<CellProps> = (args) => <Cell {...args} />;

export const CellClosed = Template.bind({});
CellClosed.args = {
  children: 10,
};

export const CellEmpty = Template.bind({});
CellEmpty.args = {
  children: 0,
};
