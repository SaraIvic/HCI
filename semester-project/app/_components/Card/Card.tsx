import { FC } from "react";
import "./style.css";
import Image from "next/image";
import Button from "../Button/Button";

interface CardProps {
  title: string;
  text: string;
  btnText: string;
  imageUrl: string;
}

const Card: FC<CardProps> = ({ title, text, btnText, imageUrl }) => {
  return (
    <div className="card">
      <Image
        className="card-img"
        src={imageUrl}
        width={330}
        height={220}
        alt="cat called Leo"
      />
      <div className="card-text">
        <h2>{title.toLocaleUpperCase()}</h2>
        <p>{text}</p>
      </div>
      <Button text={btnText} />
    </div>
  );
};

export default Card;
