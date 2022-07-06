import React from "react";

function Navigation({ currentSelected, setCurrentSelected }) {
  return (
    <nav>
      <ul className="d-flex flex-row">
        <li className={`mx-2 ${currentSelected === "about" && "navActive"}`}>
          <span onClick={() => setCurrentSelected("about")}>About Me</span>
        </li>
        <li className={`mx-2 ${currentSelected === "portfolio" && "navActive"}`}>
          <span onClick={() => setCurrentSelected("portfolio")}>Portfolio</span>
        </li>
        <li className={`mx-2 ${currentSelected === "contact" && "navActive"}`}>
          <span onClick={() => setCurrentSelected("contact")}>Contact</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
