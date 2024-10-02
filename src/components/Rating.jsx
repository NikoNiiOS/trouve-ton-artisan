import React from "react";
import "../styles/rating.css";

function Rating({ note }) {
  const fullStars = Array(5).fill(<i className="fa-solid fa-star"></i>);
  const emptyStars = Array(5).fill(<i className="fa-regular fa-star"></i>);

  const parsedNote = parseFloat(note);

  const fullStarsCount = fullStars.slice(5 - Math.round(parsedNote));
  const emptyStarsCount = emptyStars.slice(Math.round(parsedNote));

  return (
    <div className="stars">
      {fullStarsCount.map((fullStarsCount, index) => (
        <span key={index}>{fullStarsCount}</span>
      ))}
      {emptyStarsCount.map((emptyStarsCount, index) => (
        <span key={index}>{emptyStarsCount}</span>
      ))}
    </div>
  );
}

export default Rating;
