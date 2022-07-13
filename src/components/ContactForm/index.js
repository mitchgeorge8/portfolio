import React, { useState } from "react";
import { capitalizeFirstLetter, validateEmail } from "../../utils/helpers";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_9o5fd8s";
const TEMPLATE_ID = "template_zocaksn";
const PUBLIC_KEY = "94q9ROgtTx8hkr9rO";

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

    const TEMPLATE_PARAMS = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
    };

    if (!errorMessage && name && email && message) {
      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, TEMPLATE_PARAMS, PUBLIC_KEY)
        .then((res) => {
          console.log("Success:", res.status, res.text);
        })
        .catch((err) => console.log(err));

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

        {errorMessage && (
          <p className="col-start-1 col-span-2 md:col-start-2 md:col-span-1 text-center">
            {errorMessage}
          </p>
        )}
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
