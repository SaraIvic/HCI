import { Metadata } from "next";
import Card from "../_components/Card/Card";
import "./style.css";
import contentfulService from "@/lib/contentfulClient";

export const metadata: Metadata = {
  title: "About Us",
};

async function AboutUs() {
  const animals = await contentfulService.getAllAnimals();
  return (
    <div className="animals-list">
      {animals &&
        animals.map((animal) => (
          <div>
            <Card
              key={animal.id}
              title={animal.title}
              text={animal.description}
              button={{
                text: "Read More",
                href: `/aboutUs/${animal.id}`,
              }}
              imageUrl={animal.featuredImage.url}
            />
          </div>
        ))}
    </div>
  );
}

export default AboutUs;
