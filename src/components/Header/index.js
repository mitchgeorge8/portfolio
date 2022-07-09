function Header({ currentSelected, setCurrentSelected }) {
  const handleMenuClick = () => {
    const navBar = document.querySelector("#navBar");

    if (navBar.classList.contains("hidden")) {
      navBar.classList.remove("hidden");
    } else {
      navBar.classList.add("hidden");
    }
  };

  const handleNavClick = (e) => {
    const menuButton = document.querySelector("#menuButton");

    if (getComputedStyle(menuButton).display === "block") {
      handleMenuClick();
    }

    setCurrentSelected(e.target.id);

    const navElements = document.querySelectorAll(".navElement");
    navElements.forEach((element) => {
      element.classList.remove("text-emerald-800");
      element.removeAttribute("aria-current");
    });

    e.target.classList.add("text-emerald-800");
    e.target.setAttribute("aria-current", "page");
  };

  return (
    <header>
      <nav className="md:flex items-center border-gray-200 md:border-b-2">
        <div className="flex justify-between items-center p-3 border-gray-200 border-b-2 md:border-0">
          <h1 className="text-xl md:text-3xl">
            <a href="/">Mitchell George</a>
          </h1>
          <i
            id="menuButton"
            className="fa-solid fa-bars fa-lg md:hidden cursor-pointer"
            onClick={handleMenuClick}
          ></i>
        </div>

        <ul
          id="navBar"
          className="hidden justify-center items-center p-3 pr-10 md:p-0 md:flex border-gray-200 border-b-2 md:border-0 md:text-lg"
        >
          <li className="text-right pb-1 md:mx-3 md:p-0 ">
            <span
              id="about"
              className="navElement cursor-pointer text-emerald-800"
              onClick={handleNavClick}
              aria-current="page"
            >
              About Me
            </span>
          </li>
          <li className="text-right pb-1 md:mx-3 md:p-0">
            <span
              id="portfolio"
              className="navElement cursor-pointer"
              onClick={handleNavClick}
            >
              Portfolio
            </span>
          </li>
          <li className="text-right pb-1 md:mx-3 md:p-0">
            <span
              id="contact"
              className="navElement cursor-pointer"
              onClick={handleNavClick}
            >
              Contact
            </span>
          </li>
          <li className="text-right md:mx-3 md:p-0">
            <span
              id="resume"
              className="navElement cursor-pointer"
              onClick={handleNavClick}
            >
              Resume
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
