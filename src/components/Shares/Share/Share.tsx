import { useState } from "react";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import "./Share.scss";

export interface ShareProps {
  icon: IconDefinition;
  activeIcon: IconDefinition | undefined;
  label: string;
}

export const Share = ({ icon, label, activeIcon }: ShareProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={classNames("Share", { Share__Active: isActive && activeIcon })}
      onClick={() => setIsActive(!isActive)}
    >
      <FontAwesomeIcon icon={isActive ? activeIcon || icon : icon} />
      <span className="Share__Label">{label}</span>
    </button>
  );
};
