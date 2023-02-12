import React, { useState, useEffect, useRef } from "react";
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

  //* scroll bottom

  const fieldRef = useRef();

  const scrollToBottom = () => {
    if (messageList?.length > 0) {
      fieldRef.current.scrollTop = fieldRef.current.scrollHeight;
      // console.log(fieldRef.current);
      console.log("useEffect scroll-bottom");
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  //? делал зависимость от messageList, но теперь очень частое срабатывание, сделал отдельную ф-ю, но она плохо работает с добавлением 1 сообщения! (функция видит предпоследнее сообщение.)

  //*обновление LocalStorage. ок. Потом запустить.
  useEffect(() => {
    setInterval(() => {
      setMessageList(JSON.parse(localStorage.getItem("soLonelyChat")));
      console.log("Я сумасшедший UseEffect");
    }, 1000);
  }, []);

  //todo useLocalStorage?
  useEffect(() => {
    localStorage.setItem("soLonelyChat", JSON.stringify(messageList));
  }, [messageList]);

  const submitSendClickHandle = (e) => {
    e.preventDefault();
    if (text.trim()) {
      createMessageList();
      console.log("send message", text); //todo send message
      scrollToBottom(); //! плохо работает если 1 элемент добавлять
      setText("");
    } else {
      console.log("Please, enter a message");
      setText("");
    }
  };
  //*createMessageList

  const createMessageList = () => {
    setMessageList([...messageList, { name: name, text: text, id: uuidv4() }]);
    console.log("function createMessageList", "messageList = ", messageList);
  };

  return (
    <div className="chat">
      <h1 className="chat__title">SoLonelyChat</h1>
      <ChatField name={name} messageList={messageList} fieldRef={fieldRef} />

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
