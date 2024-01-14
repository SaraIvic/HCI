import { FC } from "react";
import Card from "../Card/Card";
import "./style.css";
import { TypeAnimalListItem } from "@/lib/contentfulClient";

interface CardsProps {
  animals: TypeAnimalListItem[];
}

const Cards: FC<CardsProps> = ({ animals }) => {
  return (
    <div className="animals-list">
      {animals &&
        animals.map((animal) => (
          <div key={animal.id}>
            <Card
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
};

export default Cards;
