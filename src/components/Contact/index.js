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

  const handleInput = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });

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
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!errorMessage && name && email && message) {
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
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 pt-6"
      >
        <label
          htmlFor="name"
          className="col-start-1 text-left md:text-right mx-2 mb-2 md:text-lg"
        >
          Your Name:
        </label>
        <input
          type="text"
          className="md:col-start-2 col-span-2 md:col-span-1 mx-2 mb-2 p-1 rounded shadow"
          value={name}
          onInput={handleInput}
          name="name"
        ></input>

        <label
          htmlFor="email"
          className="col-start-1 text-left md:text-right mx-2 mt-2 md:my-2 md:text-lg"
        >
          Email:
        </label>
        <input
          type="text"
          className="md:col-start-2 col-span-2 md:col-span-1 mx-2 my-2 md:my-2 p-1 rounded shadow"
          value={email}
          onInput={handleInput}
          name="email"
        ></input>

        <label
          htmlFor="message"
          className="col-start-1 text-left md:text-right mx-2 mt-2 md:my-2 md:text-lg"
        >
          Message:
        </label>
        <textarea
          type="textarea"
          className="md:col-start-2 col-span-2 md:col-span-1 mx-2 my-2 md:my-2 p-1 rounded shadow"
          value={message}
          onInput={handleInput}
          name="message"
          rows="5"
        ></textarea>

        {errorMessage && <p className="">{errorMessage}</p>}
        <button
          type="submit"
          className="col-start-1 col-span-2 md:col-start-2 md:col-span-1 m-2 p-1 rounded bg-gray-700 text-gray-100"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default ContactForm;

/* <form id="contact-form" onSubmit={handleSubmit} className="">
        <div className="">
          <label htmlFor="name" className="">
            Name:
          </label>
          <input
            type="text"
            className=""
            defaultValue={name}
            onBlur={handleBlur}
            name="name"
          />
        </div>
        <div className="">
          <label htmlFor="email" className="">
            Email address:
          </label>
          <input
            type="email"
            className=""
            defaultValue={email}
            onBlur={handleBlur}
            name="email"
          />
        </div>
        <div className="">
          <label htmlFor="message" className="">
            Message:
          </label>
          <textarea
            name="message"
            className=""
            defaultValue={message}
            onBlur={handleBlur}
            rows="5"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="">* {errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form> */
