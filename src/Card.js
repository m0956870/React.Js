import React from "react";
import "./App.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.imgSrc} className="card-img" alt="card" />
        <div className="card-info">
          <h3 className="card-category">{props.name}</h3>
          <p className="card-title">{props.title}</p>
          <a href={props.link} target="_blank" rel="noreferrer">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
