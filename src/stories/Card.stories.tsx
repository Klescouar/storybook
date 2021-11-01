import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card, CardProps } from "../components/Card/Card";
import { socials, actions, shares } from "../data";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Component = Template.bind({});
Component.args = {
  socials,
  actions,
  shares,
} as CardProps;
