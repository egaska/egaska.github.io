import React from "react";
import ContactForm from "../contactform/contactForm";

function Contact() {
  return (
    <>
    <div class="container main">
      <div class="row">
        <div class="page-header">
          <h3 className= "col-12">
            <b>Contact</b>
          </h3>
          <hr class="my-3" />
        </div>
      </div>
          <ContactForm/>
    </div>
          </>
  );
}
export default Contact;
