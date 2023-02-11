import React, { useRef, useEffect } from "react";
import "./chatfield.scss";

import MessageElement from "../MessageElement/MessageElement";

const ChatField = ({ messageList }) => {
  const fieldRef = useRef();

  //* scroll bottom
  useEffect(() => {
    if (messageList?.length > 0) {
      fieldRef.current.scrollTop = fieldRef.current.scrollHeight;
      console.log("useEffect scroll-bottom");
    }
  }, [messageList]);

  //todo потом подумать! возможно, при обновлении из второго окна, скролл у первого окна будет скроллиться вниз

  return (
    <>
      {messageList?.length > 0 ? (
        <div className="field" ref={fieldRef}>
          {messageList.map((item) => (
            <MessageElement name={item.name} text={item.text} key={item.id} />
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
