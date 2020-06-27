import React from "react";


function NavBar() {
      return (
        <div className="container">
          <h1 className="display-3 row float-left col-xl-5 col-lg-5 col-md-12 col-sm-12">Emily Gaska</h1>
          <div className="container float-right col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <form action="/profile">
              <button className="button" id="profile" href="/index.html">Profile</button></form>
            <form action="portfolio">
              <button className="button" id="portfolio" href="/portfolio.html">Portfolio</button></form>
            <form action="contact">
              <button className="button" id="contact" href="/contact.html">Contact</button></form>
          </div>
        </div>
      );
    }
  export default NavBar;