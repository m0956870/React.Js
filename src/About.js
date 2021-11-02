import React from "react";
import {Link} from 'react-router-dom';
import './App.css'

let About = () => {
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
      <h2>Hello I am Manish, Want to become MERN Stack Developer</h2>
    </>
  );
};

export default About;
