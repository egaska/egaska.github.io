import React from "react";
import './styles.css';


function navBar() {
      return (
        <div class="container">
          <h1 class="display-3 row float-left col-xl-5 col-lg-5 col-md-12 col-sm-12">Emily Gaska</h1>
          <div class="container float-right col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <form action="index.html">
              <button class="button" id="profile" href="/index.html">Profile</button></form>
            <form action="portfolio.html">
              <button class="button" id="portfolio" href="/portfolio.html">Portfolio</button></form>
            <form action="contact.html">
              <button class="button" id="contact" href="/contact.html">Contact</button></form>
          </div>
        </div>
      );
    }
  export default navBar;