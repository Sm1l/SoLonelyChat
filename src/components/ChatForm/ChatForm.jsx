import React from "react";
import "./chatForm.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

const ChatForm = (name, text, setText, buttonSendClickHandle) => {
  return (
    <form action="" className="chat__form">
      <Input value={text} setValue={setText} text={`${name} is typing...`} />
      <Button text={"Send Message"} type={"submit"} buttonClickHandle={buttonSendClickHandle} />
    </form>
  );
};

export default ChatForm;
