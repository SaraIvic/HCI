import { FC } from "react";
import "./style.css";

interface ButtonProps {
  text: string;
}

const Button: FC<ButtonProps> = ({ text }) => {
  return <button className="btn">{text.toUpperCase()}</button>;
};

export default Button;
