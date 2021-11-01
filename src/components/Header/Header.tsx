import { faArrowLeft, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Header.scss";

export interface HeaderProps {
  withBack: boolean;
}

export const Header = ({ withBack }: HeaderProps) => (
  <div className="Header">
    {withBack && (
      <div className="Header__Icon">
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
    )}
    <div className="Header__Icon">
      <FontAwesomeIcon icon={faEllipsisV} />
    </div>
  </div>
);
