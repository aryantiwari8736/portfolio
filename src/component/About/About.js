import React from "react";
import "./About.css";
function About() {
  return (
    <div className="cont">
      <section>
      <div className="projecthead">
        <div className="projhead"> 0.2  </div>
        <div> About Me{" "}</div>
      </div>
        <div className="cont">
          <div className="about-det-cont">
            <p className="aboutme-para">
              My name is Aryan Tiwari. Currently pursuing B.Tech from KIET. I am from Lucknow, 
              love to develop websites. I have completed my initial education
              from Sai Inter College. I have secured All U.P rank 7 in class
              12th board examination.
            </p>
            <div className="skill-heading">My Skills :-</div>
            <div className="skill">
            
              <ul className="list">
                <li>Html</li>
                <li>CSS</li>
                <li>BootStrap</li>
                <li>Tailwind</li>
                <li>Javascript</li>
                <li>React Js</li>
                <li>Redux</li>
              </ul>
              <ul className="list">
                <li>Node</li>
                <li>Express</li>
                <li>MongoDb</li>
                <li>Postgres</li>
                <li>Passport</li>
                <li>Deployment</li>
                <li>Git Github</li>
              </ul>
              <ul className="list">
                <li>Docker</li>
                <li>Testing</li>
                <li>Jest</li>
                <li>Serverless</li>
                <li>Monorepo</li>
                <li>AWS</li>
                <li>Hosting</li>
              </ul>
              <ul className="list">
                <li>C++</li>
                <li>DSA</li>
                <li>Problem-Solving</li>
                <li>Networking</li>
                <li>DBMS</li>
                <li>Operating System</li>
                <li>Design</li>
              </ul>
            </div>
          </div>

         
        </div>
      </section>
    </div>
  );
}

export default About;
