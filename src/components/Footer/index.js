import React from "react";

function Footer() {
  return (
    <footer className="flex justify-center items-center">
      <a href="https://github.com/mitchgeorge8" className="m-3">
        <i className="fa-brands fa-github fa-xl"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/mitchell-g-george/"
        className="m-3"
      >
        <i className="fa-brands fa-linkedin fa-xl"></i>
      </a>
      <a
        href="https://open.spotify.com/user/mitchgeorge8"
        className="m-3"
      >
        <i className="fa-brands fa-spotify fa-xl"></i>
      </a>
    </footer>
  );
}

export default Footer;
