import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav>
        <div className="head">Aryan's Portfolio!</div>
        <ul>
          <a
            href="https://drive.google.com/file/d/1e2tkftMTXgoBYQmIg_X7lYICijuL_-u7/view?usp=sharing"
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
