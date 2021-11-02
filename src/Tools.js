import React from "react";
import { Link } from "react-router-dom";
import './App.css'

let Tools = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">Manish</div>
        <div>
          <ul>
            <Link to="/About">About</Link>
            <Link to="/Tools">Tools</Link>
            <Link to="/Contact">Contact</Link>
          </ul>
        </div>
      </div>
      <h2>Tools I know</h2>
      <ul>
        <li>Html</li>
        <li>Css</li>
        <li>JavaScript</li>
        <li>Jquery</li>
        <li>React</li>
      </ul>
    </>
  );
};

export default Tools;
