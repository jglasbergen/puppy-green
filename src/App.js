import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
// Theme imports
import { ThemeProvider } from "@material-ui/styles";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import SimpleBottomNavigation from "./components/layout/bottombar";
import NavBar from "./components/layout/navbar";
import RouteList from "./components/routes/routes";
import { jsonAction, simpleAction } from "./redux/actions/simpleAction";
import theme from "./theme";



const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => {
  return {
    simpleAction: () => dispatch(simpleAction()),
    jsonAction: () => dispatch(jsonAction())
  };
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
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
        <SimpleBottomNavigation />
      </ThemeProvider>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
