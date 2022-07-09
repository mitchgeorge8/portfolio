import { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [currentSelected, setCurrentSelected] = useState("about");

  return (
    <>
      <Navigation
        currentSelected={currentSelected}
        setCurrentSelected={setCurrentSelected}
      ></Navigation>
      <main>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={currentSelected}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            {currentSelected === "about" ? (
              <About></About>
            ) : currentSelected === "portfolio" ? (
              <Portfolio></Portfolio>
            ) : currentSelected === "contact" ? (
              <ContactForm></ContactForm>
            ) : (
              <Resume></Resume>
            )}
          </CSSTransition>
        </SwitchTransition>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
