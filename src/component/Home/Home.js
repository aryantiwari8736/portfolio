import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import First from "../firstcomponent/First";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Project from "../Project/Project";

import "./Home.css";
function Home() {
  return (
    <div>
      <Navbar />
      <div className="partition">
        
       
        <div>
          <First />
          <About />
          <Project />
          <Contact />
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default Home;
