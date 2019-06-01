import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./App.module.scss";

const cx = classNames.bind(styles);

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
