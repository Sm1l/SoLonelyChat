import React, { useRef, useEffect } from "react";
import "./chatfield.scss";

import MessageElement from "../MessageElement/MessageElement";

const ChatField = ({ messageList, fieldRef }) => {
  // const fieldRef = useRef();

  // //* scroll bottom
  // const scrollToBottom = () => {
  //   if (messageList?.length > 0) {
  //     fieldRef.current.scrollTop = fieldRef.current.scrollHeight;
  //     console.log("useEffect scroll-bottom");
  //   }
  // };

  // useEffect(() => {
  //   scrollToBottom();
  // }, []);

  // //? делал зависимость от messageList, но теперь очень частое срабатывание!

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
