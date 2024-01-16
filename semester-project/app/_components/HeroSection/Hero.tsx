import { FC } from "react";
import "./style.css";
import Image from "next/image";
import Button from "../Button/Button";

interface HeroProps {
  imgPosition: string;
  title: string;
  text: string;
  button: Button;
  image: Image;
}

interface Button {
  text: string;
  href: string;
}
interface Image {
  src: string;
  alt: string;
}

const Hero: FC<HeroProps> = ({ imgPosition, title, text, button, image }) => {
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
      {imgPosition === "left" ? img : ""}
      <div className="hero-left">
        <h1 className="hero-title">{title.toLocaleUpperCase()}</h1>
        <p className="hero-text">{text}</p>
        <Button text={button.text} href={button.href} />
      </div>
      {imgPosition === "right" ? img : ""}
    </section>
  );
};

export default Hero;
