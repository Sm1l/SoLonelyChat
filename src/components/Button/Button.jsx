import React from "react";
import "./button.scss";

const Button = ({ text, type, buttonClickHandle, buttonRef, buttonClass }) => {
  return (
    <div>
      <button type={type} className={`button ${buttonClass}`} onClick={buttonClickHandle} ref={buttonRef}>
        {text}
      </button>
    </div>
  );
};

export default Button;
