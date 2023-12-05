import { FC } from "react";
import "./style.css";
import Image from "next/image";
import Button from "../Button/Button";

interface HeroProps {
  title: string;
  text: string;
  buttonText: string;
}

const Hero: FC<HeroProps> = ({ title, text, buttonText }) => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">{title.toLocaleUpperCase()}</h1>
        <p className="hero-text">{text}</p>
        <Button text={buttonText} />
      </div>
      <Image
        className="hero-img"
        src="/hero-image.png"
        width={472}
        height={472}
        alt="Dogs and cats"
      />
    </section>
  );
};

export default Hero;
