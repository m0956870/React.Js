import React from "react";
import {Link} from 'react-router-dom';
import './App.css'

let Contact = () => {
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
      <h2>Contact page</h2>
      <label>Name</label>
      <input type='text' />
    </>
  );
};

export default Contact;
