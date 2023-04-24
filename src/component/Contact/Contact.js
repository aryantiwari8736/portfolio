import React from "react";
import "./Conatct.css";
function Contact() {
  return (
    <div className="cotactcont">
      <div className="conthead"> 03.What's Next?</div>
      <div className="contmid">Connect With Me</div>
      <div className="contbio">
        I love to talk about different technologies like -
        Frontend-Development,Backend-Development,A.I,M.L etc.Feel free to
        message me any time
      </div>
      <a href="https://twitter.com/aryantiwari_14">
        <button className="contbtn"> Say Hi</button>
      </a>
    </div>
  );
}

export default Contact;
