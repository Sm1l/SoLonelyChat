import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ChatField from "../../components/ChatField/ChatField";

import "./chat.scss";
// import ChatForm from "../../components/ChatForm/ChatForm";

const Chat = ({ name }) => {
  const [text, setText] = useState("");

  const [messageList, setMessageList] = useState(() => {
    return JSON.parse(localStorage.getItem("soLonelyChat")) || [];
  });

  //todo useLocalStorage?
  useEffect(() => {
    localStorage.setItem("soLonelyChat", JSON.stringify(messageList));
  }, [messageList]);

  //!-------------

  const submitSendClickHandle = (e) => {
    e.preventDefault();
    if (text !== "") {
      createMessageList();
      console.log("send message", text); //todo send message
      // console.log(InputRefValue);
      setText("");
    } else {
      console.log("Please,enter a message");
    }
  };
  //*createMessageList

  const createMessageList = () => {
    setMessageList([...messageList, { name: name, text: text, id: uuidv4() }]);
    console.log("function createMessageList", "messageList=", messageList);
  };

  return (
    <div className="chat">
      <h1 className="chat__title">SoLonelyChat</h1>
      <ChatField messageList={messageList} />

      {/* <ChatForm name={name} text={text} setText={setText} buttonSendClickHandle={buttonSendClickHandle} /> */}
      <form action="" className="chat__form" onSubmit={submitSendClickHandle}>
        <Input value={text} setValue={setText} text={`${name} is typing...`} />
        <Button text={"Send Message"} type={"submit"} />
      </form>
      {/* вынести форму в отд компонент */}
    </div>
  );
};

export default Chat;
