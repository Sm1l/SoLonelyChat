import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

import "./home.scss";

const Home = ({ name, setName, handleSubmit, homeIsVisible }) => {
  let navigate = useNavigate();

  const buttonChatClickHandle = () => {
    console.log("click");
    navigate("/chat");
  };
  //* фокус на кнопке!
  const buttonRef = useRef();

  useEffect(() => {
    !homeIsVisible && buttonRef.current.focus();
  }, [homeIsVisible]);

  return (
    <div className="home">
      <h1 className="home__title">SoLonelyChat</h1>
      <p className="home__text">
        {homeIsVisible ? "Welcome, my lonely friend..." : `Welcome, ${name}, are you ready? `}
      </p>
      {homeIsVisible ? (
        <Form name={name} setName={setName} handleSubmit={handleSubmit} />
      ) : (
        <Button text={"Go chat!"} type={"button"} buttonClickHandle={buttonChatClickHandle} buttonRef={buttonRef} />
      )}
    </div>
  );
};

export default Home;
