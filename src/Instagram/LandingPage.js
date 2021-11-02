import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Explore from "./Explore";
import Reels from "./Reels";
import Activity from "./Activity";
import Profile from "./Profile";

const LandingPage = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Explore" component={Explore} />
        <Route exact path="/Reels" component={Reels} />
        <Route exact path="/Activity" component={Activity} />
        <Route exact path="/Profile" component={Profile} />
      </Switch>
    </div>
  );
};

export default LandingPage;
