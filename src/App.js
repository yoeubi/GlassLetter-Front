import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./App.module.scss";
import { withAuthenticator } from "aws-amplify-react";
import Splash from "./components/Splash";
import withSplash from "./hoc/withSplash";
import Main from "./components/Main";

const cx = classNames.bind(styles);
// 30 인트로
// 60 데모
// 45 비전 앤 다음 할것

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={withSplash(Main)} />
          <Route exact path="/logo" component={Splash} />
        </Switch>
      </div>
    );
  }
}

export default withAuthenticator(App);
