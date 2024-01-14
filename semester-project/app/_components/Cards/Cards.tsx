"use client";

import { FC } from "react";
import Card from "../Card/Card";
import "./style.css";
import { TypeAnimalListItem } from "@/lib/contentfulClient";
import { useState } from "react";
import FilteringOptions from "../FilteringOptions/FilteringOptions";

interface CardsProps {
  animals: TypeAnimalListItem[];
}

const Cards: FC<CardsProps> = ({ animals }) => {
  const [filteredAnimals, setFilteredAnimals] = useState(animals);
  const AnimalTypes = ["cat", "dog", "other"];

  const filterAnimals = (animalType: string) => {
    const newAnimals = animals.filter(
      (animal) => animal.animalType === animalType
    );
    setFilteredAnimals(newAnimals);
  };

  return (
    <>
      <FilteringOptions
        categories={AnimalTypes}
        filterItems={filterAnimals}
        allData={animals}
        setItems={setFilteredAnimals}
      />
      <div className="animals-list">
        {filteredAnimals &&
          filteredAnimals.map((animal) => (
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
    </>
  );
};

export default Cards;
