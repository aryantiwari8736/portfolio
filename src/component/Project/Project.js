import React from "react";
import Projectcard from "./Projectcard";
import { data } from "../../constant";
import "./Project.css"
function Project() {
  return (
    <div className="project_cont">
      <div className="projecthead">
        <span className="projhead"> 0.2 </span>Somethings I've built{" "}
      </div>
      <div className="pro_cont_2">
      {data.map((e) => (
        <Projectcard data={e} />
      ))}
      </div>
    </div>
  );
}

export default Project;
