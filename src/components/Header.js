function Header({ currentSelected, setCurrentSelected }) {
  const handleMenuClick = () => {
    const nav = document.querySelector("#nav");

    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
    } else {
      nav.classList.add("hidden");
    }
  };

  const handleNavClick = (e) => {
    setCurrentSelected(e.target.id);
  };

  return (
    <header>
      <nav className="md:flex items-center border-gray-200 md:border-b-2">
        <div className="flex justify-between items-center p-3 border-gray-200 border-b-2 md:border-0">
          <h1 className="text-3xl">
            <a href="/">Mitchell George</a>
          </h1>
          <i
            id="menu"
            className="fa-solid fa-bars fa-lg md:hidden cursor-pointer"
            onClick={handleMenuClick}
          ></i>
        </div>

        <ul
          id="nav"
          className="hidden justify-center items-center md:flex border-gray-200 border-b-2 md:border-0"
        >
          <li className="w-fit mx-auto pb-1 pt-1 md:mx-3 md:p-0">
            <span
              id="about"
              className="cursor-pointer"
              onClick={handleNavClick}
            >
              About Me
            </span>
          </li>
          <li className="w-fit mx-auto pb-1 md:mx-3 md:p-0">
            <span
              id="portfolio"
              className="cursor-pointer"
              onClick={handleNavClick}
            >
              Portfolio
            </span>
          </li>
          <li className="w-fit mx-auto pb-1 md:mx-3 md:p-0">
            <span
              id="contact"
              className="cursor-pointer"
              onClick={handleNavClick}
            >
              Contact
            </span>
          </li>
          <li className="w-fit mx-auto pb-1 md:mx-3 md:p-0">
            <span
              id="resume"
              className="cursor-pointer"
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
