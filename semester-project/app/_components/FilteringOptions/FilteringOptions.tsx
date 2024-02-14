import React, { FC, useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    filterItems(category);
  };

  const handleResetClick = () => {
    setSelectedCategory(null);
    setItems(allData);
  };

  return (
    <div className="filtering-options-btns">
      {categories.sort().map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
      <button id="reset-btn" onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
};

export default FilteringOptions;
