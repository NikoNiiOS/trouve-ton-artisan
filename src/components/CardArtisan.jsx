import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import "../styles/card_artisan.css";

function CardArtisan(props) {
  return (
    <li className="col-lg-4 col-md-6" key={props.id}>
      <div className="card m-3">
        <div className="card-body">
          <h3 className="card-title text-center">{props.name}</h3>
          <div className="text-center">
            <Rating note={props.note} />
          </div>
          <h4 className="card-text text-center">{props.specialty}</h4>
          <h4 className="card-text text-center">{props.location}</h4>
          <div className="text-center">
            <Link
              to={`/details/${props.id}`}
              className="btn btn-outline-primary"
            >
              {props.btn}
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CardArtisan;
