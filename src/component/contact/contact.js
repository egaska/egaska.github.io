import React from "react";

function Contact() {
  return (
    <main class="container">
      <section class="row">
        <div
          class="col-lg-7 col-md-11 col-sm-12 border"
        >
          <div
            class="page-header"
          >
            <h3>
              <b>Contact</b>
            </h3>
          </div>
          <hr class="my-3" />
          <div class="row">
            <form class="col-sm-12">
              <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input
                  type="name"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="John Smith"
                />
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput2">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@email.com"
                />
              </div>

              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                ></textarea>
              </div>

              <button
                type="submit"
                class="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Contact;
