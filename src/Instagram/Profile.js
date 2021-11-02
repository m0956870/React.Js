import React from "react";
import { Link } from "react-router-dom";
import "./instagram.css";

// import Home from './Home'
// import Explore from './Explore'
// import Reels from './Reels'
// import Activity from './Activity'

import { CgHome } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { MdSlowMotionVideo } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrGrid } from "react-icons/gr";
import { MdPermContactCalendar } from "react-icons/md";

const Profile = () => {
  return (
    <div className="instagram">
      <h3 className="heading">Profile</h3>

      <div className="profile-detail"></div>
      <div
        className="profile-cur"
        style={{ display: "flex", justifyContact: "space-between" }}
      >
        <div
          style={{
            height: "50px",
            width: "49%",
            textAlign: "center",
            marginTop: "10px",
            fontSize: "1.5em",
          }}
        >
          <GrGrid />
        </div>
        <div
          style={{
            height: "50px",
            width: "49%",
            textAlign: "center",
            fontSize: "1.8em",
            marginTop: "10px",
          }}
        >
          <MdPermContactCalendar />
        </div>
      </div>

      <div className="upload-pic">
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
              src="https://picsum.photos/id/58/100/"
              alt="pic"
            />
          </div>
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

export default Profile;
