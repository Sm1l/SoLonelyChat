import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import ChatField from "../../components/ChatField/ChatField";
import ChatForm from "../../components/ChatForm/ChatForm";

import "./chat.scss";

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
      console.log("useEffect scroll-bottom");
    }
  };
  const updateLocalStorage = () => {
    localStorage.setItem("soLonelyChat", JSON.stringify(messageList));
  };

  useEffect(() => {
    updateLocalStorage();
    console.log("update");
    scrollToBottom();
  }, [messageList]);

  //*проверка  обновления localStorage из другого окна
  useEffect(() => {
    const checkLocalStorage = setInterval(() => {
      // console.log("длина LocalStorage: ", JSON.parse(localStorage.getItem("soLonelyChat")).length, "из SetInterval");
      // console.log("длина messageList: ", messageList.length, "из SetInterval");
      console.log("Я проверяю новые сообщения");

      setMessageList((freshMessageList) => {
        return freshMessageList.length !== JSON.parse(localStorage.getItem("soLonelyChat")).length
          ? JSON.parse(localStorage.getItem("soLonelyChat"))
          : freshMessageList;
      });
    }, 1000);

    //   setMessageList(() => {
    //     return messageList.length !== JSON.parse(localStorage.getItem("soLonelyChat")).length
    //  JSON.parse(localStorage.getItem("soLonelyChat"))
    //       : messageList;
    //   });
    // }, 1000);

    // return () => {
    //   clearInterval(checkLocalStorage); //!рассмотреть
    //   console.log("clear");
    // };
  }, []);

  const submitSendClickHandle = (e) => {
    e.preventDefault();
    if (text.trim()) {
      createMessageList();
      console.log("send message", text); //todo send message
      setText("");
    } else {
      console.log("Please, enter a message");
      setText("");
    }
  };

  //*создание нового сообщения
  const createMessageList = () => {
    setMessageList([...messageList, { name: name, text: text, id: uuidv4() }]);
  };

  return (
    <div className="chat">
      <h1 className="chat__title">SoLonelyChat</h1>
      <ChatField name={name} messageList={messageList} fieldRef={fieldRef} />
      <ChatForm name={name} text={text} setText={setText} submitSendClickHandle={submitSendClickHandle} />
    </div>
  );
};

export default Chat;
