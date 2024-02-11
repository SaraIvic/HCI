import { Metadata } from "next";
import Cards from "../_components/Cards/Cards";
import contentfulService from "@/lib/contentfulClient";

export const metadata: Metadata = {
  title: "Adoption",
};

async function Adoption() {
  const animals = await contentfulService.getAllAnimals();
  const animalTypes = await contentfulService.getAllAnimalTypes();
  const uniqueAnimalTypesSet = new Set(
    animalTypes.map((item) => item.animalType)
  );
  const uniqueAnimalTypesArray = Array.from(uniqueAnimalTypesSet);

  return (
    <>
      <Cards animals={animals} animalTypes={uniqueAnimalTypesArray} />
    </>
  );
}

export default Adoption;
