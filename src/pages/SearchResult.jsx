import React from "react";
import Card from "../components/CardArtisan";
import "../styles/search_result.css";

function SearchResult({ data, searchTerm }) {
  const results = data.filter(
    (artisan) =>
      artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let content;

  if (results.length > 0) {
    const artisans = results.map((artisan) => (
      <Card
        name={artisan.name}
        specialty={artisan.specialty}
        location={artisan.location}
        btn="En savoir plus"
        key={artisan.id}
        id={artisan.id}
        note={artisan.note}
      />
    ));

    content = (
      <div>
        <h1>Le résultat de votre recherche</h1>
        <div className="sep1"></div>
        <div className="row list-card list-artisan">{artisans}</div>
      </div>
    );
  } else {
    content = <h2>Aucun résultat trouvé pour "{searchTerm}"</h2>;
  }

  return <section className="page">{content}</section>;
}

export default SearchResult;
