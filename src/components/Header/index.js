import React from "react";
import Navigation from "../Navigation";

function Header({ currentSelected, setCurrentSelected }) {
  return (
    <header className="d-flex flex-row p-3">
      <h2>
        <a href="/">Mitchell George</a>
      </h2>
      <Navigation
        currentSelected={currentSelected}
        setCurrentSelected={setCurrentSelected}
      ></Navigation>
    </header>
  );
}

export default Header;
