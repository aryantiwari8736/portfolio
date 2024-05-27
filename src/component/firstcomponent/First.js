import React from "react";
import "./First.css";
function First() {
  return (
    <div>
      <section className="landing-page-first-sec">
        <div className="land-name">Hi, my name is</div>
        <div className="datahead">Aryan Tiwari </div>
        <div className="datahead">I build things for the web</div>
        <p className="mypara">
          I'm B.Tech 4th year student. I am a full-stack developer. I have some Experience in ReactJs, Redux, Node, express, MongoDb, Postgres, Docker, Serverless, Sql, Next, Typescript, Prisma, Monorepo. Feel free to connect with me.
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
