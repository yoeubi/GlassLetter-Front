import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./App.module.scss";
import { withAuthenticator } from "aws-amplify-react";
import Home from './components/Home'

const cx = classNames.bind(styles);

// function Home() {
//   return <h2>Hello,World!</h2>;
// }

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
