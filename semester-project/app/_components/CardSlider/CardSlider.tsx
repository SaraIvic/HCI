"use client";

import { FC, useEffect, useRef, useState } from "react";
import "./style.css";
import Card from "../Card/Card";
import { CardProps } from "../Card/Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../Button/Button";

interface CardSliderProps {
  cards: CardProps[];
}

const CardSlider: FC<CardSliderProps> = ({ cards }) => {
  const [currentCards, setCurrentCards] = useState([0, 1, 2]);
  const [displayCount, setDisplayCount] = useState(0);
  const length = cards.length;

  const handleResize = () => {
    updateDisplayCount();
  };

  useEffect(() => {
    updateDisplayCount();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const updateDisplayCount = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 950) {
      setDisplayCount(1); // small screens
    } else if (screenWidth <= 1300) {
      setDisplayCount(2); // medium screens
    } else {
      setDisplayCount(3); // larger screens
    }
  };

  const shiftArray = (arr: number[], shiftAmount: number) => {
    const shiftedArray = arr.map((index) => {
      let shiftedIndex = (index + shiftAmount) % length;
      shiftedIndex = shiftedIndex < 0 ? length + shiftedIndex : shiftedIndex;

      return shiftedIndex;
    });
    return shiftedArray;
  };

  const nextCard = () => {
    setCurrentCards(shiftArray(currentCards, displayCount));
  };

  const prevCard = () => {
    setCurrentCards(shiftArray(currentCards, -displayCount));
  };

  return (
    <section className="section-container">
      <h2 className="slider-title">ADOPT ME</h2>
      <div className="card-slider-container">
        <div className="card-slider">
          <IoIosArrowBack className="left-arrow" onClick={prevCard} />
          <IoIosArrowForward className="right-arrow" onClick={nextCard} />
          <div className="card-container">
            {currentCards.slice(0, displayCount).map((index, arrayIndex) => (
              <div className="slide" key={arrayIndex}>
                <Card {...cards[index]} />
              </div>
            ))}
          </div>
        </div>
        <div className="slider-btn">
          <Button href="/adoption" text="View All" />
        </div>
      </div>
    </section>
  );
};

export default CardSlider;
