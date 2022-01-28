import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // React Hook
    // Feature of this Hook is the ability to initialize the values of the state, we want to clear the input fields on the component loading
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // destructure the formState object into its named properties, name, email, and message
    const { name, email, message } = formState;

    // Form change handler
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
          }  
        setFormState({...formState, [e.target.name]: e.target.value })
      }
    //   console.log(formState);

    // Form submit event handler
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

  // JSX
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit} >
        {/* // name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onChange={handleChange} />
        </div>
        {/* // email input */}
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onChange={handleChange} />
        </div>
        {/* // message text area */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
