import React from "react";
import about from "../assets/img/about.jpg";
import { intorText } from "../constants";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h1 className="intro__title">{intorText.title}</h1>
        <div className="intro__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="intro__text">
          <div className="text">
            <div>{intorText.desc[0]}</div>
            <div>{intorText.desc[1]}</div>
            <div>{intorText.desc[2]}</div>
          </div>
          <div className="img">
            <img src={about} alt="어바웃" />
          </div>
        </div>
        <div className="intro__lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
