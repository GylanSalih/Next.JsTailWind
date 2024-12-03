'use client'; // Diese Direktive markiert die Datei als Client-Komponente

import React, { useState } from "react";
import Link from 'next/link'; // Korrekt
import Filter from "../components/Filter/Filter";
import HolographicCard from "../components/HolographicCard/HolographicCard";

const Portfolio = () => {
  const [category, setCategory] = useState("all"); // Zustand für Kategorie
  const [cardType, setCardType] = useState("normal"); // Zustand für Karten-Typ
  const [activeLayout, setActiveLayout] = useState(1); // Zustand für Grid-Layout

  // Beispielhafte Kartendaten
  const cardsData = [
    { imgSrc: "/assets/img/reduced_images/New3.jpeg", link: "portfolio/project", category: "Coding", rarity: "rare holo v1" },
    { imgSrc: "/assets/gifs/Dragon.gif", link: "/page2", category: "Design", rarity: "rare holo" },
    { imgSrc: "/assets/gifs/Dragon.gif", link: "/page3", category: "Design", rarity: "rare holo" },
    { imgSrc: "/assets/img/reduced_images/New3.jpeg", link: "/portfolio/SingleCard", category: "Coding", rarity: "rare holo v1" },
    { imgSrc: "/assets/gifs/Dragon.gif", link: "/page2", category: "Design", rarity: "rare holo" },
    { imgSrc: "/assets/gifs/Dragon.gif", link: "/page3", category: "Design", rarity: "rare holo" },
  ];

  // Dynamische Kartenfilterung basierend auf Kategorie und Rarität
  const filteredCards = cardsData
    .filter((card) => {
      const matchesCategory = category === "all" || card.category === category;
      return matchesCategory;
    })
    .map((card) => {
      // Überschreibe Rarität, wenn `cardType` ausgewählt ist
      return {
        ...card,
        rarity: cardType !== "normal" ? cardType : card.rarity,
      };
    });

  return (
    <div>
      {/* Filter-Komponente */}
      <Filter
        onCategoryChange={setCategory}
        onCardTypeChange={setCardType}
        onLayoutChange={setActiveLayout}
      />

      {/* Dynamisches Karten-Grid */}
      <div className={`card-grid layout-${activeLayout}`}>
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <div key={index} className="holographic__section">
              {/* Verwende Link ohne zusätzliches <a>-Tag */}
              <Link href={card.link}>
                <HolographicCard
                  imgSrc={card.imgSrc}
                  category={card.category}
                  rarity={card.rarity} // Neue Rarität anwenden
                />
              </Link>
            </div>
          ))
        ) : (
          <p>No cards found for the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
