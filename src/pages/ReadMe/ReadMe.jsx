import React from "react";
import { NavLink } from "react-router-dom";
import "./readme.scss";

const ReadMe = () => {
  return (
    <div className="readme">
      <h1 className="readme__title">SoLonelyChat</h1>
      <h2 className="readme__readtitle">ReadMe</h2>
      <p className="readme__text">
        Dear friend!
        <br /> Welcome to SoLonelyChat! You have a unique opportunity to communicate with yourself, to express
        everything that worries you so much, but there was no time to admit it to yourself! <br />
        So, open the chat in two browser windows, register and go ahead!
      </p>
      <NavLink to="/" className="readme__link">
        Start the chat!
      </NavLink>
    </div>
  );
};

export default ReadMe;
