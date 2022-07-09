import { useState } from "react";

import Header from "./components/Header";

function App() {
  const [currentSelected, setCurrentSelected] = useState("about");

  return (
    <>
      <Header
        currentSelected={currentSelected}
        setCurrentSelected={setCurrentSelected}
      ></Header>
    </>
  );
}

export default App;
