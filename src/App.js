import React from "react";
import NavBar from "./component/navbar/navbar";
import Profile from "./component/profile/profile";
import Contact from "./component/contact/contact"
import "./App.css";



function App() {
  return (
    <div className="jumbo">
      <NavBar></NavBar>
<br/><br/>
    <Profile></Profile>

      

      <div className="fixed-bottom "></div>
      <nav className="navbar fixed-bottom navbar-light bg-lightr justify-content-center "></nav>
    </div>
  );
}

export default App;
