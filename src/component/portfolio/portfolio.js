import React from "react";

function Portfolio() {
  return (
    <div class="container main">
      <div class="row">
        <div class="page-header">
          <h3>
            <b>Portfolio</b>
          </h3>
          <hr class="my-3" />
        </div>
      </div>
      <div class="row">
        <div class="iconContainer col-lg-3 col-md-6 col-sm-12">
          <img
            src="/assets/texasquiz.png"
            alt="Texas History Quiz"
            class="icon"
          />
          <a href="https://egaska.github.io/Texas-History-Quiz/">
            <div class="overlay">
              <p class="label">Texas Quiz</p>
            </div>
          </a>
        </div>

        <div class="iconContainer col-lg-3 col-md-6 col-sm-12">
          <a href="https://egaska.github.io/Weather-Display/">
            <img
              src="/assets/weather.png"
              alt="Weather Dashboard"
              class="icon"
            />
            <div class="overlay">
              <p class="label">Weather Dashboard</p>
            </div>
          </a>
        </div>

        <div class="iconContainer col-lg-3 col--6 col-sm-12">
          <a href=" https://egaska.github.io/Work-Day-Schedule/ ">
            <img
              src="/assets/sched.png "
              alt="Work Day Scheduler"
              class="icon"
            />
            <div class="overlay ">
              <p class="label ">Work Day Scheduler</p>
            </div>
          </a>
        </div>

        <div class="iconContainer col-lg-3 col--6 col-sm-12">
          <a href=" https://egaska.github.io/Super-Recipe/ ">
            <img
              src="/assets/cook.png "
              alt="Super Recipe"
              class="img-fluid icon"
            />
            <div class="overlay ">
              <p class="label ">Super Recipe</p>
            </div>
          </a>
        </div>

        <div class="iconContainer col-lg-3 col--6 col-sm-12">
          <a href=" https://egaska.github.io/Random-Password-Generator ">
            <img
              src="/assets/lock.png "
              alt="Password Generator"
              class="img-fluid icon"
            />
            <div class="overlay ">
              <p class="label ">Password Generator</p>
            </div>
          </a>
        </div>

        <div class="iconContainer col-lg-3 col--6 col-sm-12">
          <a href=" https://github.com/egaska/ReadMe_Generator">
            <img
              src="/assets/readme.png "
              alt="ReadMe Generator"
              class="img-fluid icon"
            />

            <div class="overlay ">
              <p class="label ">ReadMe Generator</p>
            </div>
          </a>
        </div>

        <div class="iconContainer col-lg-3 col--6 col-sm-12">
          <a href=" https://github.com/egaska/Employee-Tracker ">
            <img
              src="/assets/employee.png "
              alt="Employee-Tracker"
              class="img-fluid icon "
            />

            <div class="overlay ">
              <p class="label ">Employee Tracker</p>
            </div>
          </a>
        </div>

        <div class="iconContainer col-lg-3 col--6 col-sm-12 ">
          <a href="https://tranquil-brushlands-06237.herokuapp.com/ ">
            <img
              src="/assets/burger.png "
              alt="Burger Logger"
              class="img-fluid icon "
            />

            <div class="overlay ">
              <p class="label ">Burger Logger</p>
            </div>
          </a>
        </div>
      </div>

      <div class="row col-12">
        <div id="credit">
          Icons made by
          <a href="https://www.flaticon.com/authors/freepik " title="Freepik ">
            Freepik
          </a>
          from
          <a href="https://www.flaticon.com/ " title="Flaticon ">
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
