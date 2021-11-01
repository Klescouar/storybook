import "./Button.scss";
import classNames from "classnames";

export interface ButtonProps {
  label: string;
  size: "small" | "large";
  onClick: () => void;
  backgroundColor?: string;
}

export const Button = ({
  label,
  size,
  onClick,
  backgroundColor = "#ecf0f3",
}: ButtonProps) => (
  <button
    onClick={onClick}
    style={{ backgroundColor }}
    className={classNames("Button", { "Button--small": size === "small" })}
  >
    {label}
  </button>
);
