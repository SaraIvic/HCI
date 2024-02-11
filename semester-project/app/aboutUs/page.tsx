import { Metadata } from "next";
import "./style.css";
import contentfulService from "@/lib/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const metadata: Metadata = {
  title: "About Us",
};

async function AboutUs() {
  const aboutUsText = await contentfulService.getAboutUsText();

  return (
    <div className="about-us">
      <div className="about-us-text">
        {documentToReactComponents(aboutUsText)}
      </div>
    </div>
  );
}

export default AboutUs;
