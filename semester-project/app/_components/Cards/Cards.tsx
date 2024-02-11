"use client";

import { FC } from "react";
import Card from "../Card/Card";
import "./style.css";
import { TypeAnimalListItem } from "@/lib/contentfulClient";
import { useState } from "react";
import FilteringOptions from "../FilteringOptions/FilteringOptions";

interface CardsProps {
  animals: TypeAnimalListItem[];
  animalTypes: string[];
}

const Cards: FC<CardsProps> = ({ animals, animalTypes }) => {
  const [filteredAnimals, setFilteredAnimals] = useState(animals);

  const filterAnimals = (animalType: string) => {
    const newAnimals = animals.filter(
      (animal) => animal.animalType === animalType
    );
    setFilteredAnimals(newAnimals);
  };

  return (
    <>
      <FilteringOptions
        categories={animalTypes}
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
                  href: `/adoption/${animal.id}`,
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
