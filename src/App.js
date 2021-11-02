import React from "react";
import "./App.css";
// import { Switch, Route } from "react-router-dom";

// import Navbar from "./Navbar";
// import About from "./About";
// import Tools from "./Tools";
// import Contact from "./Contact";
// import Covid19 from "../src/Covid19/Covid19";

// import Note from '../src/Notes/Note';

// import Practice from "./Practice";
// import Card from "./Card";
// import CardData from "./CardData";

// Instagram App
import LandingPage from '../src/Instagram/LandingPage'

function App() {
  return (
     
    <>
        {/* <Switch>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Tools" component={Tools} />
          <Route exact path="/Contact" component={Contact} />
        </Switch> */}

        {/* <Note /> */}

        <LandingPage />
        

           {/* <Practice /> */}
    {/* <Covid19 /> */}

        {/* <div className="cards">
        {CardData.map((value, index) => {
          return (
            <Card
              key={index}
              imgSrc={value.imgSrc}
              name={value.name}
              title={value.title}
              link={value.link}
            />
          );
        })}

          <Card
            imgSrc={CardData[0].imgSrc}
            name={CardData[0].name}
            title={CardData[0].title}
            link={CardData[0].link}
          />
          <Card
            imgSrc={CardData[1].imgSrc}
            name={CardData[1].name}
            title={CardData[1].title}
            link={CardData[1].link}
          />
          <Card
            imgSrc={CardData[2].imgSrc}
            name={CardData[2].name}
            title={CardData[2].title}
            link={CardData[2].link}
          />
          <Card
            imgSrc={CardData[3].imgSrc}
            name={CardData[3].name}
            title={CardData[3].title}
            link={CardData[3].link}
          /> 
      </div> */}
    </>
    
  );
}

export default App;
