import React, { useState } from "react";
import "./App.css";

const Practice = () => {
  const fname = "Manish";
  const lname = "Kumar";
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  const currHour = new Date().getHours();
  let imgSrc = "https://picsum.photos/330/200";

  let greeting = "";
  let cssStyle = {};
  if (currHour >= 1 && currHour < 12) {
    greeting = "Good Morning";
    cssStyle.color = "orange";
  } else if (currHour >= 12 && currHour < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "green";
  } else {
    greeting = "Good Night";
    cssStyle.color = "#87ceeb";
  }

  const [cTime, setCTime] = useState(currTime);
  let updateTime = () => {
    const time = new Date().toLocaleTimeString();
    setCTime(time);
  };
  setInterval(updateTime, 100);

  let age = {
    margin: "6px",
    color: "grey",
  };

  let [count, setCount] = useState(0);
  let [bg, setBg] = useState("grey");

  let incNum = () => {
    setCount(count + 1);
    // console.log(count);
    let newBg = "rgba(255, 254, 254, 0.4)";
    setBg(newBg);
  };

  let decNum = () => {
    setCount(count - 1);
    // console.log(count);
    let newBg = "rgba(0, 0, 0, 0.7)";
    setBg(newBg);
  };

  // useState Hook
  let [name, setName] = useState("");
  // let inputEvent = (event) => {
  //   // console.log(event.target.value)
  //   setName(event.target.value);
  // };
  let [hobby, setHobby] = useState("");
  // let inputEvent2 = (event) => {
  //   // console.log(event.target.value)
  //   setHobby(event.target.value);
  // };

  let [Naam, setNaam] = useState();
  let [pasand, setPasand] = useState();
  let addText = () => {
    setNaam(name);
    setPasand(hobby);
  };

  return (
    <>
      <h1 style={{ margin: "6px" }}>
        Date: {currDate} & Time is {cTime}
      </h1>
      <h2 style={{ margin: "6px" }}>
        <span style={cssStyle}>{greeting}! </span> My name is {fname} {lname}
      </h2>

      {/* <h3>Hello! My name is { fname + " " + lname }</h3> */}
      {/* <h3>{ `Hello! My name is ${fname} ${lname}` }</h3>  */}

      <h3 style={age}>My age is {20 + 3}</h3>
      <div style={{ backgroundColor: bg, height: "100px", width: "100px" }}>
        <h2> {count} </h2>
        <button onClick={incNum}>Increase</button>
        <button onClick={decNum}>Decrease</button>
      </div>

      <div>
        <h3>
          {Naam} {pasand}
        </h3>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Naam likh..."
        />
        <input
          type="text"
          onChange={(e) => setHobby(e.target.value)}
          placeholder="Hobby likh..."
        />
        <button onClick={addText}>Add</button>
      </div>

      <div className="pics">
        <img src={imgSrc} alt="pic" />
        <img src="https://picsum.photos/id/1/330/200" alt="pic" />
        <img src="https://picsum.photos/id/2/330/200" alt="pic" />
      </div>
    </>
  );
};

export default Practice;
