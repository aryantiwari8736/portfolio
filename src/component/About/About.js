import React from "react";
import me from "../../assets/me1.jpg";
import "./About.css";
function About() {
  return (
    <div className="cont">
      <section>
        <div className="abohead">
          {" "}
          <span className="abospanhead">01. </span>About Me
        </div>
        <div className="cont">
          <div className="about-det-cont">
            <p className="aboutme-para">
              My name is Aryan Tiwari .Currently pursuing B.Tech from KIET .I
              love to develop websites . I have completed my initial education
              from Sai Inter College . I have secured All U.P rank 7 in class
              12th board examination.
            </p>
            <div className="skill">
              <div className="skill-heading">My Skills :-</div>
              <ul className="list">
                <li>Html</li>
                <li>CSS</li>
                <li>BootStrap</li>
                <li>Tailwind</li>
                <li>Javascript</li>
                <li>React Js</li>
              </ul>
              <ul className="list">
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>MongoDb</li>
                <li>PassportJs</li>
                <li>Deployment</li>
                <li>Git Github Js</li>
              </ul>
            </div>
          </div>

          <div>
            <img src={me} alt="" className="img" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
