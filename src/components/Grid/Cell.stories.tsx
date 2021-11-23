import { Cell, CellProps } from "./Cell";
import { ComponentMeta, Story } from "@storybook/react";
export default {
  title: "Grid/Cell",
  component: Cell,
  argTypes: {
    coords: {
      defaultValue: [1, 1],
    },
  },
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

export const CellBomb = Template.bind({});
CellBomb.args = {
  children: 9,
};

export const CellFlag = Template.bind({});
CellFlag.args = {
  children: 11,
};

export const CellWeakFlag = Template.bind({});
CellWeakFlag.args = {
  children: 12,
};

export const CellWithNumber = Template.bind({});
CellWithNumber.args = {
  children: 2
};
