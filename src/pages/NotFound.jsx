import React from "react";
import "../styles/not_found.css";

function NotFound() {
  return (
    <section className="page d-flex not-found">
      <img className="img-404" src="img/404.webp" alt="un livre ouvert"></img>
      <div className="error">
        <h2>Erreur 404</h2>
        <p>La page est inaccessible ou inexistante.</p>
      </div>
    </section>
  );
}

export default NotFound;
