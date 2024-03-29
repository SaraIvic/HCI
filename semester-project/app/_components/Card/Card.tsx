import { FC } from "react";
import "./style.css";
import Image from "next/image";
import Button from "../Button/Button";

interface ButtonProps {
  text: string;
  href: string;
}
export interface CardProps {
  title: string;
  text: string;
  button: ButtonProps;
  imageUrl: string;
}

const Card: FC<CardProps> = ({ title, text, button, imageUrl }) => {
  return (
    <div className="card">
      <div>
        <Image
          className="card-img"
          src={imageUrl}
          width={342}
          height={228}
          alt={title}
        />
        <div className="card-text">
          <h2>{title.toLocaleUpperCase()}</h2>
          <p className="paragraph">{text}</p>
        </div>
      </div>
      <Button {...button} />
    </div>
  );
};

export default Card;
