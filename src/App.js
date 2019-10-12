import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import NavBar from "./components/layout/navbar";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteList from "./components/routes/routes";

class App extends Component {
  render() {
    return (
      <Router>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title" color="inherit">
              My header
            </TypoGraphy>
            <NavBar />
          </Toolbar>
        </AppBar>
        <Switch>
          <RouteList />
        </Switch>
      </Router>
    );
  }
}
export default App;
