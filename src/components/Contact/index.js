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
  }

  function handleSubmit(e) {
    e.preventDefault();

    setFormState({
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    });

    if (!errorMessage && formState.name) {
      console.log(formState);

      setFormState({
        name: "",
        email: "",
        message: "",
      });
    }
  }

  return (
    <>
      <h2 className="text-xl md:text-3xl">Contact</h2>
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="col-12 col-md-6"
      >
        <div className="mb-2">
          <label htmlFor="name" className="form-label mb-1">
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
          <label htmlFor="email" className="form-label mb-1">
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
          <label htmlFor="message" className="form-label mb-1">
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
            <p className="error-text">* {errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ContactForm;
