import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Social, SocialLinkProps } from "../components/Socials/Social/Social";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default {
  title: "Social",
  component: Social,
} as ComponentMeta<typeof Social>;

const Template: ComponentStory<typeof Social> = (args) => (
  <div style={{ width: "150px" }}>
    <Social {...args} />
  </div>
);

export const Facebook = Template.bind({});
Facebook.args = {
  icon: faFacebook,
  name: "facebook",
} as SocialLinkProps;

export const Instagram = Template.bind({});
Instagram.args = {
  icon: faInstagram,
  name: "instagram",
} as SocialLinkProps;

export const Twitter = Template.bind({});
Twitter.args = {
  icon: faTwitter,
  name: "twitter",
} as SocialLinkProps;

export const Youtube = Template.bind({});
Youtube.args = {
  icon: faYoutube,
  name: "youtube",
} as SocialLinkProps;
