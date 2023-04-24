import React from "react";
import Projectcard from "./Projectcard";
import { data } from "../../constant";
function Project() {
  return (
    <div>
      {data.map((e) => (
        <Projectcard data={e} />
      ))}
    </div>
  );
}

export default Project;
