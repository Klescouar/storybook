import {
  faComment,
  faHeart,
  faShareSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const socials = [
  { icon: faFacebook, name: "facebook" },
  { icon: faTwitter, name: "twitter" },
  { icon: faInstagram, name: "instagram" },
  { icon: faYoutube, name: "youtube" },
];

export const actions = [
  { label: "Message", onClick: () => console.log("CLICK MESSAGE") },
  { label: "Subscribe", onClick: () => console.log("CLICK SUBSCRIBE") },
];

export const shares = [
  { icon: faHeart, activeIcon: solidHeart, label: "10.4K" },
  { icon: faComment, label: "14.3K" },
  { icon: faShareSquare, label: "9.3K" },
];
