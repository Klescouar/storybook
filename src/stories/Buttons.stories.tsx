import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Buttons, ButtonsProps } from "../components/Buttons/Buttons";
import { actions } from "../data";

export default {
  title: "Buttons",
  component: Buttons,
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = (args) => (
  <div style={{ width: "300px" }}>
    <Buttons {...args} />
  </div>
);

export const Component = Template.bind({});
Component.args = {
  actions,
} as ButtonsProps;
