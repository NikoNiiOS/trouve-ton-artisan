import React from "react";
import { useParams } from 'react-router-dom';
import data from "../data/datas.json";
import Card from "../components/CardArtisan";
import "../styles/search_cat.css";

function SearchCategory() {
  const { artisanCategory } = useParams();

  const selectedArtisans = data.filter(
    (artisan) => artisan.category === artisanCategory
  );

  const artisans = selectedArtisans.map((artisan) => {
    return (
      <Card
        name={artisan.name}
        specialty={artisan.specialty}
        location={artisan.location}
        btn="En savoir plus"
        key={artisan.id}
        id={artisan.id}
        note={artisan.note}
      />
    );
  });

  return (
    <section className="page">
      <h1>Les artisans de la région dans la catégorie {artisanCategory}</h1>
      <div className="sep1"></div>
      <div className="row list-card list-artisan">{artisans}</div>
    </section>
  );
}

export default SearchCategory;
