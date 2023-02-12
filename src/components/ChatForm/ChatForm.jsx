import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

import "./chatForm.scss";

const ChatForm = ({ name, text, setText, submitSendClickHandle }) => {
  return (
    <form action="" className="chat__form" onSubmit={submitSendClickHandle}>
      <Input value={text} setValue={setText} text={`${name} is typing...`} />
      <Button text="Send Message" type="submit" />
    </form>
  );
};

export default ChatForm;
