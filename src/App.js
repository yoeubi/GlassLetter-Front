import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./App.module.scss";
import { withAuthenticator } from "aws-amplify-react";
import Home from "./components/Home";
import Splash from "./components/Splash";

const cx = classNames.bind(styles);
// 30 인트로
// 60 데모
// 45 비전 앤 다음 할것

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* <Route exact path="/" component={Home}/> */}
          <Route exact path="/" component={Splash} />
        </Switch>
      </div>
    );
  }
}

export default App;
