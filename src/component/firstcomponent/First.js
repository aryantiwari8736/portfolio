import React from "react";
import "./First.css";
function First() {
  return (
    <div>
      <section className="landing-page-first-sec">
        <div className="land-name">Hi,my name is</div>
        <div className="datahead">Aryan Tiwari </div>
        <div className="datahead">I build things for the web</div>
        <p className="mypara">
          I'm B.Tech 2nd year student. I have some Experience in ReactJs ,
          NodeJs , ExpessJs Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Illo quos inventore, saepe recusandae excepturi velit nam porro
          libero in rem.
        </p>
        <a
          target="_blanck"
          rel="noreferrer"
          href="https://github.com/aryantiwari8736"
          className="link btn"
        >
          {" "}
          Checkout my Github
        </a>
      </section>
    </div>
  );
}

export default First;
