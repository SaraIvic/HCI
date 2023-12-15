import { FC } from "react";
import Link from "next/link";
import "./style.css";

interface ButtonProps {
  text: string;
  href: string;
}

const Button: FC<ButtonProps> = ({ text, href }) => {
  return (
    <Link href={href} className="btn">
      <button>{text.toUpperCase()}</button>
    </Link>
  );
};

export default Button;
