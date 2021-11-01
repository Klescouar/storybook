import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Share } from "./Share/Share";
import "./Shares.scss";

export interface SharesProps {
  shares: {
    icon: IconDefinition;
    activeIcon?: IconDefinition;
    label: string;
  }[];
}

export const Shares = ({ shares }: SharesProps) => (
  <div className="Shares">
    {shares.map(({ icon, label, activeIcon }) => (
      <Share icon={icon} activeIcon={activeIcon} label={label} key={label} />
    ))}
  </div>
);
