import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./App.module.scss";
import { withAuthenticator } from "aws-amplify-react";

const cx = classNames.bind(styles);
// 30 인트로
// 60 데모
// 45 비전 앤 다음 할것

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/"
            render={() => <div className={cx("app")}>hello world</div>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
