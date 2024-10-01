import React from "react";
import data from "../data/datas.json";
import Card from '../components/CardArtisan'
import "../styles/home.css";

function Home() {
  const topArtisans = data.filter((artisan) => artisan.top);

  const artisans = topArtisans.map((artisan) => {
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
      <h1>Les artisans de la région</h1>
      <div className="sep1"></div>
      <div>
        <h2>Comment trouver mon artisan ?</h2>
        <ol>
          <li>Choisir la catégorie d’artisanat dans le menu.</li>
          <li>Choisir un artisan.</li>
          <li>Le contacter via le formulaire de contact.</li>
          <li>Une réponse vous sera apportée sous 48h.</li>
        </ol>
      </div>
      <div className="sep2"></div>
      <h2>Les artisans du mois</h2>
      <ul className="row list-card">{artisans}</ul>
    </section>
  );
}

export default Home;
