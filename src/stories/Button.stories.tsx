import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonProps } from "../components/Button/Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ width: "150px" }}>
    <Button {...args} />
  </div>
);

export const Large = Template.bind({});
Large.args = {
  label: "Button",
  size: "large",
  onClick: action("Button is clicked!"),
} as ButtonProps;

export const Small = Template.bind({});
Small.args = {
  label: "Button",
  size: "small",
  onClick: action("Button is clicked!"),
};
