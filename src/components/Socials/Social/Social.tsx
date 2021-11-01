import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import "./Social.scss";

export interface SocialLinkProps {
  icon: IconDefinition;
  name: string;
}

export const Social = ({ icon, name }: SocialLinkProps) => (
  <a href="/" aria-label={name} className={classNames("Social", name)}>
    <FontAwesomeIcon icon={icon} />
  </a>
);
