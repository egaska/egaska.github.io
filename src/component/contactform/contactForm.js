import React from "react";

function ContactForm() {
  return (
    <>
      <form class="col-lg-9 col-sm-12">
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

        <button type="submit" class="btn">
          Submit
        </button>
      </form>
      
    </>
  );
}
export default ContactForm;
