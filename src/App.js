import React from "react";
import { useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [currentSelected, setCurrentSelected] = useState("about");

  return (
    <>
      <Header
        currentSelected={currentSelected}
        setCurrentSelected={setCurrentSelected}
      ></Header>
      <div className="px-8 py-6 md:px-16 md:py-12 bg-gray-100 grow">
        {currentSelected === "about" ? (
          <About></About>
        ) : currentSelected === "portfolio" ? (
          <Portfolio></Portfolio>
        ) : currentSelected === "contact" ? (
          <ContactForm></ContactForm>
        ) : (
          <Resume></Resume>
        )}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
