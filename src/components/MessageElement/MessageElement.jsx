import React from "react";
import ".//messageElement.scss";

const MessageElement = ({ name, text }) => {
  return (
    <div className="message-element">
      <span className="message-element__name">{name}</span>
      <p className="message-element__text">{text}</p>
    </div>
  );
};

export default MessageElement;
