import React from "react";

function Header({ currentSelected, setCurrentSelected }) {
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
    <header>
      <nav>
        <div>
          <h1 className="text-6xl font-bold underline">
            <a href="/">Mitchell George</a>
          </h1>
        </div>
        <ul>
          <li>
            <a href="#">
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );

  // return (
  //   <nav className="">
  //     <div className="">
  //       <a className="" href="/">
  //         <h3 className="text-yellow-600">Mitchell George</h3>
  //       </a>
  //       <button
  //         className=""
  //         type="button"
  //         data-bs-toggle="collapse"
  //         data-bs-target="#navbarNav"
  //         aria-controls="navbarNav"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <span className=""></span>
  //       </button>
  //       <div id="navbarNav">
  //         <ul >
  //           <li
  //             className={`nav-item mx-2 ${
  //               currentSelected === "about" && "active"
  //             }`}
  //             aria-current={currentSelected === "about" && "page"}
  //           >
  //             <span className="about" onClick={handleClick}>
  //               About Me
  //             </span>
  //           </li>
  //           <li
  //             className={`nav-item mx-2 ${
  //               currentSelected === "portfolio" && "active"
  //             }`}
  //             aria-current={currentSelected === "portfolio" && "page"}
  //           >
  //             <span className="portfolio" onClick={handleClick}>
  //               Portfolio
  //             </span>
  //           </li>
  //           <li
  //             className={`nav-item mx-2 ${
  //               currentSelected === "contact" && "active"
  //             }`}
  //             aria-current={currentSelected === "contact" && "page"}
  //           >
  //             <span className="contact" onClick={handleClick}>
  //               Contact
  //             </span>
  //           </li>
  //           <li
  //             className={`nav-item mx-2 ${
  //               currentSelected === "resume" && "active"
  //             }`}
  //             aria-current={currentSelected === "resume" && "page"}
  //           >
  //             <span className="resume" onClick={handleClick}>
  //               Resume
  //             </span>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );
}

export default Header;
