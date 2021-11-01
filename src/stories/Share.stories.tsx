import {
  faHeart,
  faComment,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Share, ShareProps } from "../components/Shares/Share/Share";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Share",
  component: Share,
} as ComponentMeta<typeof Share>;

const Template: ComponentStory<typeof Share> = (args) => (
  <div style={{ width: "150px" }}>
    <Share {...args} />
  </div>
);

export const Like = Template.bind({});
Like.args = {
  icon: faHeart,
  activeIcon: solidHeart,
  label: "10.4K",
} as ShareProps;

export const Comments = Template.bind({});
Comments.args = { icon: faComment, label: "14.3K" } as ShareProps;

export const ShareIcon = Template.bind({});
ShareIcon.args = { icon: faShareSquare, label: "9.3K" } as ShareProps;
