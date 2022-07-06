import React, { useState } from "react";
import { capitalizeFirstLetter, validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleBlur(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Invalid email.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h2>Contact</h2>
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="col-12 col-md-6"
      >
        <div className="mb-2">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue={name}
            onBlur={handleBlur}
            name="name"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            className="form-control"
            defaultValue={email}
            onBlur={handleBlur}
            name="email"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            name="message"
            className="form-control"
            defaultValue={message}
            onBlur={handleBlur}
            rows="5"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
