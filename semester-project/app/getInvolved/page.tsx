import { Metadata } from "next";
import Image from "next/image";
import "./style.css";
import Button from "../_components/Button/Button";
import contentfulService from "@/lib/contentfulClient";

export const metadata: Metadata = {
  title: "Get Involved",
};

async function GetInvolved() {
  const getInvolvedText = await contentfulService.getGetInvolvedText();
  return (
    <div className="getInvolved">
      <div className="getInvolved-intro">
        <h1>{getInvolvedText?.mainTitle}</h1>
        <h4>{getInvolvedText?.subtitle}</h4>
        <p>{getInvolvedText?.mainInfo}</p>
      </div>
      <div className="getInvolved-sections">
        <div className="getInvolved-section">
          <Image
            className="getInvolved-img"
            src="/donate.jpeg"
            width={450}
            height={250}
            alt="donate"
          />
          <h2>{getInvolvedText?.donateTitle}</h2>
          <p>{getInvolvedText?.donateInfo}</p>

          <Button text="Donate" href="" />
        </div>
        <div className="getInvolved-section">
          <Image
            className="getInvolved-img"
            src="/volonteer.jpeg"
            width={450}
            height={250}
            alt="volonteer"
          />
          <h2>{getInvolvedText?.volonteerTitle}</h2>
          <p>{getInvolvedText?.volonteerInfo}</p>
          <Button text="Volonteer" href="" />
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
