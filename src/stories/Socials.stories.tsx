import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Socials, SocialsProps } from "../components/Socials/Socials";
import { socials } from "../data";

export default {
  title: "Socials",
  component: Socials,
} as ComponentMeta<typeof Socials>;

const Template: ComponentStory<typeof Socials> = (args) => (
  <Socials {...args} />
);

export const Component = Template.bind({});
Component.args = {
  socials,
} as SocialsProps;
