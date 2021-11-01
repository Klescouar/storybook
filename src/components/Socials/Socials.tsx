import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { Social } from "./Social/Social";
import "./Socials.scss";

export interface SocialsProps {
  socials: Array<{ icon: IconDefinition; name: string }>;
}

export const Socials = ({ socials }: SocialsProps) => (
  <div className="Socials">
    {socials.map(({ icon, name }) => (
      <Social icon={icon} name={name} key={name} />
    ))}
  </div>
);
