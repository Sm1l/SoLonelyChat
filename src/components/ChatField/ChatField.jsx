import React from "react";
import "./chatfield.scss";

import MessageElement from "../MessageElement/MessageElement";

const ChatField = ({ name, messageList, fieldRef }) => {
  return (
    <>
      {messageList?.length > 0 ? (
        <div className="field" ref={fieldRef}>
          {messageList.map((item) => (
            <MessageElement
              name={item.name}
              text={item.text}
              key={item.id}
              msgElemClass={item.name !== name ? "_right" : ""}
            />
          ))}
        </div>
      ) : (
        <div className="field">
          <p className="field__no">No messages yet</p>
        </div>
      )}
    </>
  );
};

export default ChatField;
