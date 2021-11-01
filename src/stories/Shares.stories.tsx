import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Shares, SharesProps } from "../components/Shares/Shares";
import { shares } from "../data";

export default {
  title: "Shares",
  component: Shares,
} as ComponentMeta<typeof Shares>;

const Template: ComponentStory<typeof Shares> = (args) => <Shares {...args} />;

export const Component = Template.bind({});
Component.args = {
  shares,
} as SharesProps;
