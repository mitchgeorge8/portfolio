import React from "react";

function Navigation({ currentSelected, setCurrentSelected }) {
  const handleClick = (e) => {
    setCurrentSelected(e.target.className);
    e.target.ariaCurrent = "page";
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Mitchell George
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
            >
              <span className="about" onClick={handleClick}>
                About Me
              </span>
            </li>
            <li
              className={`nav-item mx-2 ${
                currentSelected === "portfolio" && "active"
              }`}
            >
              <span className="portfolio" onClick={handleClick}>
                Portfolio
              </span>
            </li>
            <li
              className={`nav-item mx-2 ${
                currentSelected === "contact" && "active"
              }`}
            >
              <span className="contact" onClick={handleClick}>
                Contact
              </span>
            </li>
            <li
              className={`nav-item mx-2 ${
                currentSelected === "resume" && "active"
              }`}
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

// <nav className="navbar">
//   <ul className="d-flex flex-row">
//     <li className={`mx-2 ${currentSelected === "about" && "navActive"}`}>
//       <span className="about" onClick={handleClick}>
//         About Me
//       </span>
//     </li>
//     <li
//       className={`mx-2 ${currentSelected === "portfolio" && "navActive"}`}
//     >
//       <span className="portfolio" onClick={handleClick}>
//         Portfolio
//       </span>
//     </li>
//     <li className={`mx-2 ${currentSelected === "contact" && "navActive"}`}>
//       <span className="contact" onClick={handleClick}>
//         Contact
//       </span>
//     </li>
//     <li className={`mx-2 ${currentSelected === "resume" && "navActive"}`}>
//       <span className="resume" onClick={handleClick}>
//         Resume
//       </span>
//     </li>
//   </ul>
// </nav>
