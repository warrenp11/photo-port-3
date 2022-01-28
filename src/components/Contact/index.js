import React, { useState } from "react";

function ContactForm() {
  // React Hook
  // Feature of this Hook is the ability to initialize the values of the state, we want to clear the input fields on the component loading
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });


  // JSX
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        {/* // name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={formState.name} />
        </div>
        {/* // email input */}
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={formState.name} />
        </div>
        {/* // message text area */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={formState.name} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
