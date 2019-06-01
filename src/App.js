import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" render={() => <div>hello world</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
