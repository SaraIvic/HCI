import { FC } from "react";
import "./style.css";
import Image from "next/image";
import Button from "../Button/Button";

export interface CardProps {
  title: string;
  text: string;
  button: Button;
  imageUrl: string;
}
interface Button {
  text: string;
  href: string;
}

const Card: FC<CardProps> = ({ title, text, button, imageUrl }) => {
  return (
    <div className="card">
      <Image
        className="card-img"
        src={imageUrl}
        width={330}
        height={220}
        alt={title}
      />
      <div className="card-text">
        <h2>{title.toLocaleUpperCase()}</h2>
        <p className="paragraph">{text}</p>
      </div>
      <Button {...button} />
    </div>
  );
};

export default Card;
