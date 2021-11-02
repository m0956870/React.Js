import React from "react";

import { Link } from "react-router-dom";
import "./instagram.css";

// import Explore from './Explore'
// import Reels from './Reels'
// import Activity from './Activity'
// import Profile from './Profile'

import { CgHome } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

const Home = () => {
  return (
    <div className="instagram">
      <div className="heading">
        <div>
          <FiPlusSquare />
        </div>
        <h3>Instagram</h3>
        <div>
          <RiMessengerLine />
        </div>
      </div>

      <div className='stories'> <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
      <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
      <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
      <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
      <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
      <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
      <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
      <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
      <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
      <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
      <img className="small-pic" src="https://picsum.photos/50" alt="pic" /></div>

      <div>
        <div className="post-heading">
          <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>
                <b>reactjs</b>
              </p>
              <p>venice,Italy</p>
            </div>
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>

        <img className="pic" src="https://picsum.photos/id/1/200/" alt="pic" />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "6px",
            fontSize: "1.5em",
          }}
        >
          <div>
            <ul className="like" style={{ display: "flex", listStyle: "none" }}>
              <li>
                <FaRegHeart />
              </li>
              <li>
                <FaRegComment />
              </li>
              <li>
                <FiSend />
              </li>
            </ul>
          </div>
          <div>
            <BiBookmark />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            className="small-pic2"
            src="https://picsum.photos/50"
            alt="pic"
          />
          <p>
            Liked by <b>galaxier94</b> and 1,661 others
          </p>
        </div>
        <p style={{ margin: "5px" }}>
          <b>reactjs</b> Hope you like the post, dont repost without permisson.
          #javasctipt #community #reactjs #fullstck
        </p>
      </div>

      <div>
        <div className="post-heading">
          <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>reactjs</p>
              <p>venice,Italy</p>
            </div>
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>

        <img className="pic" src="https://picsum.photos/id/2/200/" alt="pic" />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "6px",
            fontSize: "1.5em",
          }}
        >
          <div>
            <ul className="like" style={{ display: "flex", listStyle: "none" }}>
              <li>
                <FaRegHeart />
              </li>
              <li>
                <FaRegComment />
              </li>
              <li>
                <FiSend />
              </li>
            </ul>
          </div>
          <div>
            <BiBookmark />
          </div>
        </div>
        <div>
          <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
          <p>
            Liked by <b>galaxier94</b> and 1,661 others
          </p>
        </div>
        <p>
          <b>reactjs</b> Hope you like the post, dont repost without permisson.
          #javasctipt #community #reactjs #fullstck
        </p>
      </div>

      <div>
        <div className="post-heading">
          <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>reactjs</p>
              <p>venice,Italy</p>
            </div>
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>

        <img className="pic" src="https://picsum.photos/id/3/200/" alt="pic" />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "6px",
            fontSize: "1.5em",
          }}
        >
          <div>
            <ul className="like" style={{ display: "flex", listStyle: "none" }}>
              <li>
                <FaRegHeart />
              </li>
              <li>
                <FaRegComment />
              </li>
              <li>
                <FiSend />
              </li>
            </ul>
          </div>
          <div>
            <BiBookmark />
          </div>
        </div>
        <div>
          <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
          <p>
            Liked by <b>galaxier94</b> and 1,661 others
          </p>
        </div>
        <p>
          <b>reactjs</b> Hope you like the post, dont repost without permisson.
          #javasctipt #community #reactjs #fullstck
        </p>
      </div>

      <div>
        <div className="post-heading">
          <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>reactjs</p>
              <p>venice,Italy</p>
            </div>
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>

        <img className="pic" src="https://picsum.photos/id/4/200/" alt="pic" />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "6px",
            fontSize: "1.5em",
          }}
        >
          <div>
            <ul className="like" style={{ display: "flex", listStyle: "none" }}>
              <li>
                <FaRegHeart />
              </li>
              <li>
                <FaRegComment />
              </li>
              <li>
                <FiSend />
              </li>
            </ul>
          </div>
          <div>
            <BiBookmark />
          </div>
        </div>
        <div>
          <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
          <p>
            Liked by <b>galaxier94</b> and 1,661 others
          </p>
        </div>
        <p>
          <b>reactjs</b> Hope you like the post, dont repost without permisson.
          #javasctipt #community #reactjs #fullstck
        </p>
      </div>

      <div>
        <div className="post-heading">
          <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>
                <b>reactjs</b>
              </p>
              <p>venice,Italy</p>
            </div>
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>

        <img className="pic" src="https://picsum.photos/id/5/200/" alt="pic" />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "6px",
            fontSize: "1.5em",
          }}
        >
          <div>
            <ul className="like" style={{ display: "flex", listStyle: "none" }}>
              <li>
                <FaRegHeart />
              </li>
              <li>
                <FaRegComment />
              </li>
              <li>
                <FiSend />
              </li>
            </ul>
          </div>
          <div>
            <BiBookmark />
          </div>
        </div>
        <div>
          <img className="small-pic" src="https://picsum.photos/50" alt="pic" />
          <p>
            Liked by <b>galaxier94</b> and 1,661 others
          </p>
        </div>
        <p>
          <b>reactjs</b> Hope you like the post, dont repost without permisson.
          #javasctipt #community #reactjs #fullstck
        </p>
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

export default Home;
