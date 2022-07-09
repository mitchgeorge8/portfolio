import React from "react";

function Navigation({ currentSelected, setCurrentSelected }) {
  const handleClick = (e) => {
    setCurrentSelected(e.target.className);

    if (
      window.getComputedStyle(document.querySelector(".navbar-toggler"))
        .display === "block"
    ) {
      document.querySelector(".navbar-toggler").click();
    }
  };

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h3>Mitchell George</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa-solid fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className={`nav-item mx-2 ${
                currentSelected === "about" && "active"
              }`}
              aria-current={currentSelected === "about" && "page"}
            >
              <span className="about" onClick={handleClick}>
                About Me
              </span>
            </li>
            <li
              className={`nav-item mx-2 ${
                currentSelected === "portfolio" && "active"
              }`}
              aria-current={currentSelected === "portfolio" && "page"}
            >
              <span className="portfolio" onClick={handleClick}>
                Portfolio
              </span>
            </li>
            <li
              className={`nav-item mx-2 ${
                currentSelected === "contact" && "active"
              }`}
              aria-current={currentSelected === "contact" && "page"}
            >
              <span className="contact" onClick={handleClick}>
                Contact
              </span>
            </li>
            <li
              className={`nav-item mx-2 ${
                currentSelected === "resume" && "active"
              }`}
              aria-current={currentSelected === "resume" && "page"}
            >
              <span className="resume" onClick={handleClick}>
                Resume
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
