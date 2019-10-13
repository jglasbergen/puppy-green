import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import NavBar from "./components/layout/navbar";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteList from "./components/routes/routes";

import { simpleAction } from "./redux/actions/simpleAction";
import { connect } from "react-redux";

// Theme imports
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

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
          <pre>{JSON.stringify(this.props)}</pre>
          <button onClick={event => this.props.simpleAction()}>
            Test Redux action
          </button>
          <Switch>
            <RouteList />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
