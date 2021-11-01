import { Avatar } from "../Avatar/Avatar";
import { Header } from "../Header/Header";
import { Socials } from "../Socials/Socials";
import { Buttons } from "../Buttons/Buttons";
import { Shares } from "../Shares/Shares";
import Michou from "../../images/michou.png";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import "./Card.scss";

export interface CardProps {
  socials: {
    icon: IconDefinition;
    name: string;
  }[];
  actions: {
    label: string;
    onClick: () => void;
  }[];
  shares: {
    icon: IconDefinition;
    activeIcon?: IconDefinition;
    label: string;
  }[];
}

export const Card = ({ socials, actions, shares }: CardProps) => {
  return (
    <div className="Card">
      <Header withBack />
      <Avatar image={Michou} />
      <p className="Card__Name">Micheline St-Jean</p>
      <p className="Card__About">International Singer & Maple lover</p>
      <Socials socials={socials} />
      <Buttons actions={actions} />
      <Shares shares={shares} />
    </div>
  );
};
