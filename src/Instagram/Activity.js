import React from "react";
import { Link } from "react-router-dom";
import "./instagram.css";

// import Home from './Home'
// import Explore from './Explore'
// import Reels from './Reels'
// import Profile from './Profile'

import { CgHome } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { MdSlowMotionVideo } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Activity = () => {
  return (
    <div className="instagram">
      <h3 className="heading">Activity</h3>
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

export default Activity;
