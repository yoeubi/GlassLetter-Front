import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { withAuthenticator } from "aws-amplify-react";
import Splash from "./components/Splash";
// import withSplash from "./hoc/withSplash";
import Main from "./components/Main";
import GlassWill from "./components/GlassWill";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SentGlass from "./components/SentGlass";
import "./App.module.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route path="/will" component={GlassWill} />
          <Route path="/getWill" component={SentGlass} />
        </Switch>
      </div>
    );
  }
}

export default App;
