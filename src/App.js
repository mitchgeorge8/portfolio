import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [currentSelected, setCurrentSelected] = useState("about");

  return (
    <div>
      <Header
        currentSelected={currentSelected}
        setCurrentSelected={setCurrentSelected}
      ></Header>
      <main></main>
    </div>
  );
}

export default App;
