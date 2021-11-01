import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar, AvatarProps } from "../components/Avatar/Avatar";
import Michou from "../images/michou.png";

export default {
  title: "Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Component = Template.bind({});
Component.args = {
  image: Michou,
} as AvatarProps;
