import { useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [currentSelected, setCurrentSelected] = useState("about");

  return (
    <>
      <Header
        currentSelected={currentSelected}
        setCurrentSelected={setCurrentSelected}
      ></Header>
      <div>
        {currentSelected === "about" ? (
          <About></About>
        ) : currentSelected === "portfolio" ? (
          <Portfolio></Portfolio>
        ) : currentSelected === "contact" ? (
          <Contact></Contact>
        ) : (
          <Resume></Resume>
        )}
      </div>
    </>
  );
}

export default App;
