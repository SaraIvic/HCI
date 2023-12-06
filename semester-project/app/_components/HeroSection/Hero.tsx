import { FC } from "react";
import "./style.css";
import Image from "next/image";
import Button from "../Button/Button";

interface HeroProps {
  index: number;
  title: string;
  text: string;
  buttonText: string;
  image: Image;
}

interface Image {
  src: string;
  alt: string;
}

const Hero: FC<HeroProps> = ({ index, title, text, buttonText, image }) => {
  const img = (
    <Image
      className="hero-img"
      src={image.src}
      width={472}
      height={472}
      alt={image.alt}
    />
  );
  return (
    <section className="hero">
      {index % 2 === 1 ? img : ""}
      <div className="hero-left">
        <h1 className="hero-title">{title.toLocaleUpperCase()}</h1>
        <p className="hero-text">{text}</p>
        <Button text={buttonText} />
      </div>
      {index % 2 === 0 ? img : ""}
    </section>
  );
};

export default Hero;
