import React from "react";
import "./Projectcard.css";
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
function Projectcard({ data }) {
  return (
    <div className="main">
      
      <div className="projcont">
        <img src={data.img_link} alt="" className="img" />
        <div className="aboutproject">
          <div className="aboutprojhead">Featured Project</div>
          <div className="projname">{data.heading}</div>
          <div className="projdetail">{data.detail}</div>
          <div className="techused">{data.tech}</div>
          <div className="icon">
         <a href={data.git_link} target="_blanck"><FaGithub color="white" size="51px" /></a> 
         <a href={data.proj_link} target="_blanck"><CiLink color="white" size="51px" /></a> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectcard;
