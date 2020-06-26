import React from "react";
import NavBar from "./component/navbar/navbar";
import Profile from "./component/profile/profile";


function App() {
  return (
    <div class="jumbo">
      <NavBar></NavBar>

      <Profile></Profile>

      <div class="fixed-bottom "></div>
      <nav class="navbar fixed-bottom navbar-light bg-lightr justify-content-center "></nav>
    </div>
  );
}

export default App;
