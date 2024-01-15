import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";
import Button from "../Button/Button";

const ErrorPage: FC = () => {
  return (
    <div className="error-page">
      <div className="error-page-text">
        <h1>404</h1>
        <h2>Uh Oh we have a problem</h2>
        <Button text="Take me away" href="/" />
      </div>
      <Image
        className="error-page-img"
        src="/cat-removebg-preview.png"
        width={433 / 1.2}
        height={576 / 1.2}
        alt="Cat"
      />
    </div>
  );
};

export default ErrorPage;
