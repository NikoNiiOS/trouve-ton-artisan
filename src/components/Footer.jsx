import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="text-white">
      <div className="container">
        <div>
          <address>
            <p className="city">Lyon</p>
            <div className="d-flex">
              <i className="fa-solid fa-location-dot"></i>
              <div className="address">
                <p>101 Cours Charlemagne</p>
                <p>CS 20033</p>
                <p>69269 LYON CEDEX 02</p>
                <p>FRANCE</p>
              </div>
            </div>
            <i className="fa-solid fa-phone"></i>
            <a href="tel:0426734000"> +33 (0)4 26 73 4000</a>
          </address>
        </div>
        <hr></hr>
        <div className="d-flex justify-content-between flex-wrap">
          <p>Mentions légales</p>
          <p>Données personnelles</p>
          <p>Accessibilité : conforme</p>
          <p>Presse</p>
          <p>Marchés publics</p>
          <p>Venir à la région</p>
          <p>Contacts</p>
          <p>Gestions des cookies</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
