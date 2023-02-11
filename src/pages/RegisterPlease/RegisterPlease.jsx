import React from "react";
import { NavLink } from "react-router-dom";

import "./registerPlease.scss";

const RegisterPlease = () => {
  return (
    <div className="register">
      <h1 className="register__title">SoLonelyChat</h1>
      <p className="register__text">Ooops, something goes wrong!</p>
      <NavLink to="/" className="register__link">
        Register please!
      </NavLink>
    </div>
  );
};

export default RegisterPlease;
