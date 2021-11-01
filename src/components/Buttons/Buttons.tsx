import { useResponsive } from "../../hooks/useResponsive";
import { Button } from "../Button/Button";
import "./Buttons.scss";

export interface ButtonsProps {
  actions: {
    label: string;
    onClick: () => void;
  }[];
}

export const Buttons = ({ actions }: ButtonsProps) => {
  const { isMobile } = useResponsive();

  return (
    <div className="Buttons">
      {actions.map(({ label, onClick }) => (
        <Button
          label={label}
          onClick={onClick}
          key={label}
          size={isMobile ? "small" : "large"}
        />
      ))}
    </div>
  );
};
