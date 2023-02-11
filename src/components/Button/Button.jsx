import React from "react";
import "./button.scss";

const Button = ({ text, type, buttonClickHandle, buttonRef }) => {
  return (
    <div>
      <button type={type} className="button" onClick={buttonClickHandle} ref={buttonRef}>
        {text}
      </button>
    </div>
  );
};

export default Button;
