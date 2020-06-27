import React from "react";
import NavBar from "./component/navbar/navbar";
import Profile from "./component/profile/profile";
import Contact from "./component/contact/contact";
import Portfolio from "./component/portfolio/portfolio";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="jumbo">
      <NavBar />
      <br />
      <br />
      <Router>
      <Switch>
        <Route exact path={["/", "/profile"]}>
          <Profile/>
        </Route>
        <Route exact path={"/portfolio"}>
          <Portfolio />
        </Route>
        <Route exact path={"/contact"}>
          <Contact />
        </Route>
      </Switch>
      </Router>
      <div className="fixed-bottom "></div>
      <nav className="navbar fixed-bottom navbar-light bg-lightr justify-content-center "></nav>
    </div>
  );
}

export default App;
