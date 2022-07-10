function Header({ currentSelected, setCurrentSelected }) {
  const handleMenuClick = () => {
    const navList = document.querySelector("#navList");

    if (navList.classList.contains("hidden")) {
      navList.classList.remove("hidden");
    } else {
      navList.classList.add("hidden");
    }
  };

  const handleNavClick = (e) => {
    e.preventDefault();

    const menuButton = document.querySelector("#menuButton");

    if (getComputedStyle(menuButton).display === "block") {
      handleMenuClick();
    }

    setCurrentSelected(e.target.id);

    const navElements = document.querySelectorAll(".navElement");
    navElements.forEach((element) => {
      element.classList.remove("border-b-gray-500");
      element.removeAttribute("aria-current");
    });

    e.target.classList.add("border-b-gray-500");
    e.target.setAttribute("aria-current", "page");
  };

  return (
    <header>
      <nav className="md:flex">
        <div className="flex justify-between m-3">
          <h1 className="text-xl md:text-3xl">
            <a href="/">Mitchell George</a>
          </h1>

          <button
            id="menuButton"
            className="md:hidden"
            onClick={handleMenuClick}
          >
            <i className="fa-solid fa-bars fa-lg "></i>
          </button>
        </div>

        <div className="flex justify-end">
          <ul
            id="navList"
            className="hidden md:flex text-right text-base md:text-lg items-center mr-3 mb-3 md:m-0"
          >
            <li className="mb-1 md:my-0 md:mx-2">
              <a
                id="about"
                href="/"
                className="navElement md:py-1 border-y-transparent border-b-gray-500 border-y-2"
                onClick={handleNavClick}
                aria-current="page"
              >
                About Me
              </a>
            </li>
            <li className="my-1 md:my-0 md:mx-2">
              <a
                id="portfolio"
                href="/"
                className="navElement md:py-1 border-y-transparent border-y-2"
                onClick={handleNavClick}
              >
                Portfolio
              </a>
            </li>
            <li className="my-1 md:my-0 md:mx-2">
              <a
                id="contact"
                href="/"
                className="navElement md:py-1 border-y-transparent border-y-2"
                onClick={handleNavClick}
              >
                Contact
              </a>
            </li>
            <li className="mt-1 md:my-0 md:mx-2">
              <a
                id="resume"
                href="/"
                className="navElement md:py-1 border-y-transparent border-y-2"
                onClick={handleNavClick}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );

  // return (
  //   <header>
  //     <nav className="md:flex items-center h-auto md:h-16">
  //       <div className="flex justify-between items-center">
  //         <h1 className="text-xl md:text-3xl">
  //           <a href="/">Mitchell George</a>
  //         </h1>
  //         <i
  //           id="menuButton"
  //           className="fa-solid fa-bars fa-lg md:hidden cursor-pointer"
  //           onClick={handleMenuClick}
  //         ></i>
  //       </div>

  //       <ul
  //         id="navBar"
  //         className="hidden justify-center items-center pr-10 md:p-0 md:flex md:text-lg h-full"
  //       >
  //         <li className="md:flex md:items-center text-right pb-1 md:mx-3 md:p-0 md:h-full md:border-y-2 md:border-t-transparent md:border-b-gray-700">
  //           <span
  //             id="about"
  //             className="navElement cursor-pointer hover:text-black transition-colors ease-out duration-300"
  //             onClick={handleNavClick}
  //             aria-current="page"
  //           >
  //             About Me
  //           </span>
  //         </li>
  //         <li className="text-right pb-1 md:mx-3 md:p-0">
  //           <span
  //             id="portfolio"
  //             className="navElement cursor-pointer"
  //             onClick={handleNavClick}
  //           >
  //             Portfolio
  //           </span>
  //         </li>
  //         <li className="text-right pb-1 md:mx-3 md:p-0">
  //           <span
  //             id="contact"
  //             className="navElement cursor-pointer"
  //             onClick={handleNavClick}
  //           >
  //             Contact
  //           </span>
  //         </li>
  //         <li className="text-right md:mx-3 md:p-0">
  //           <span
  //             id="resume"
  //             className="navElement cursor-pointer"
  //             onClick={handleNavClick}
  //           >
  //             Resume
  //           </span>
  //         </li>
  //       </ul>
  //     </nav>
  //   </header>
  // );
}

export default Header;
