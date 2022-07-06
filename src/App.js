import { useState } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [currentSelected, setCurrentSelected] = useState("about");

  return (
    <>
      <Navigation
        currentSelected={currentSelected}
        setCurrentSelected={setCurrentSelected}
      ></Navigation>
      <main>
        {currentSelected === "about" ? (
          <About></About>
        ) : currentSelected === "portfolio" ? (
          <Portfolio></Portfolio>
        ) : currentSelected === "contact" ? (
          <ContactForm></ContactForm>
        ) : (
          <Resume></Resume>
        )}
      </main>
    </>
  );
}

export default App;
