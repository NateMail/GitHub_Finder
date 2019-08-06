import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import About from "./components/pages/About";
import Alert from "./components/layout/Alert";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" render={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
