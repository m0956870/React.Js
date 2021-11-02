import React from "react";
import { Link } from "react-router-dom";
import "./instagram.css";

// import Home from './Home'
// import Reels from './Reels'
// import Activity from './Activity'
// import Profile from './Profile'

import { CgHome } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { MdSlowMotionVideo } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Explore = () => {
  return (
    <div className="instagram">
      <input className="search" type="text" placeholder="Search" />

      <div className="explore-grid">
        <div className="grid-small">
          <img
            className="explore-pic"
            src="https://picsum.photos/id/18/100/"
            alt="pic"
          />
          <img
            className="explore-pic"
            src="https://picsum.photos/id/13/100/"
            alt="pic"
          />
        </div>
        <div className="grid-big">
          <img
            className="explore-pic2"
            src="https://picsum.photos/id/14/200/"
            alt="pic"
          />
        </div>
      </div>

      <div className="explore-grid">
        <div className="grid-small">
          <img
            className="explore-pic"
            src="https://picsum.photos/id/18/100/"
            alt="pic"
          />
          <img
            className="explore-pic"
            src="https://picsum.photos/id/19/100/"
            alt="pic"
          />
        </div>
        <div className="grid-small">
          <img
            className="explore-pic"
            src="https://picsum.photos/id/20/100/"
            alt="pic"
          />
          <img
            className="explore-pic"
            src="https://picsum.photos/id/21/100/"
            alt="pic"
          />
        </div>
        <div className="grid-small">
          <img
            className="explore-pic"
            src="https://picsum.photos/id/22/100/"
            alt="pic"
          />
          <img
            className="explore-pic"
            src="https://picsum.photos/id/23/100/"
            alt="pic"
          />
        </div>
      </div>

      <div className="explore-grid">
        <div className="grid-big">
          <img
            className="explore-pic2"
            src="https://picsum.photos/id/24/200/"
            alt="pic"
          />
        </div>
        <div className="grid-small">
          <img
            className="explore-pic"
            src="https://picsum.photos/id/25/100/"
            alt="pic"
          />
          <img
            className="explore-pic"
            src="https://picsum.photos/id/26/100/"
            alt="pic"
          />
        </div>
      </div>

      <div className="explore-grid">
        <div className="grid-small">
          <img
            className="explore-pic"
            src="https://picsum.photos/id/27/100/"
            alt="pic"
          />
          <img
            className="explore-pic"
            src="https://picsum.photos/id/28/100/"
            alt="pic"
          />
        </div>
        <div className="grid-small">
          <img
            className="explore-pic"
            src="https://picsum.photos/id/29/100/"
            alt="pic"
          />
          <img
            className="explore-pic"
            src="https://picsum.photos/id/30/100/"
            alt="pic"
          />
        </div>
        <div className="grid-small">
          <img
            className="explore-pic"
            src="https://picsum.photos/id/31/100/"
            alt="pic"
          />
          <img
            className="explore-pic"
            src="https://picsum.photos/id/32/100/"
            alt="pic"
          />
        </div>
      </div>

      <ul className="navbar">
        <Link to="/Home">
          <CgHome />
        </Link>
        <Link to="/Explore">
          <BiSearch />
        </Link>
        <Link to="/Reels">
          <MdSlowMotionVideo />
        </Link>
        <Link to="/Activity">
          <AiOutlineHeart />
        </Link>
        <Link to="/Profile">
          <CgProfile />
        </Link>
      </ul>
    </div>
  );
};

export default Explore;
