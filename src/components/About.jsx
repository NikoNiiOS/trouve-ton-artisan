import React from "react";
import "../styles/about.css";

function About(props) {
  return (
    <li className="col-lg-6 col-md-6" key={props.id}>
      <div className="card m-3">
        <div className="card-body">
          <h3 className="card-title">À propos</h3>
          <h5 className="card-text">{props.about}</h5>
        </div>
      </div>
    </li>
  );
}

export default About;
