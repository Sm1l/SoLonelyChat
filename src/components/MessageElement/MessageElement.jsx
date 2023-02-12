import React from "react";
import ".//messageElement.scss";

const MessageElement = ({ name, text, msgElemClass }) => {
  return (
    <div className={`message-element message-element${msgElemClass}`}>
      <span className={`message-element__name message-element__name${msgElemClass}`}>{name}</span>
      <p className={"message-element__text"}>{text}</p>
    </div>
  );
};

export default MessageElement;
