import React from "react";
import "./Projectcard.css";
function Projectcard({ data }) {
  return (
    <div className="main">
      <div className="projecthead">
        <span className="projhead"> 0.2 </span>Somethings I've built{" "}
      </div>
      <div className="projcont">
        <img src={data.img_link} alt="" className="img" />
        <div className="aboutproject">
          <div className="aboutprojhead">Featured Project</div>
          <div className="projname">{data.heading}</div>
          <div className="projdetail">{data.detail}</div>
          <div className="techused">{data.tech}</div>
          <div className="icon">
            <a href={data.git_link} target="_blanck">
              <i class="fa-brands fa-github fa-2x icos"></i>
            </a>
            <a href={data.proj_link} target="_blanck">
              <i class="fa-solid fa-link fa-2x icos"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectcard;
