import { FC } from "react";
import Link from "next/link";
import "./style.css";
import { TypeAnimalListItem } from "@/lib/contentfulClient";
import { Dispatch, SetStateAction } from "react";

interface FilteringOptionsProps {
  categories: string[];
  filterItems: (category: string) => void;
  allData: TypeAnimalListItem[];
  setItems: Dispatch<SetStateAction<TypeAnimalListItem[]>>;
}

const FilteringOptions: FC<FilteringOptionsProps> = ({
  categories,
  filterItems,
  allData,
  setItems,
}) => {
  return (
    <div className="filtering-options-btns">
      {categories.sort().map((category) => (
        <button key={category} onClick={() => filterItems(category)}>
          {category}
        </button>
      ))}
      <button id="reset-btn" onClick={() => setItems(allData)}>
        Reset
      </button>
    </div>
  );
};

export default FilteringOptions;
