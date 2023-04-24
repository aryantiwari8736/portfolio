import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav>
        <div className="head">Aryan's Portfolio!</div>
        <ul>
          <a
            href="https://drive.google.com/file/d/16o7k8Zbp0kGiOCK96HSWawX0O6QFwC0r/view?usp=share_link"
            className="navitem"
            target="_blanck"
          >
            Resume
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
