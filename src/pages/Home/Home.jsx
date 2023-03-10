import React, { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

import "./home.scss";

// const Home = ({ name, setName, handleSubmit, homeIsVisible }) => {
const Home = ({ name, setName, handleSubmit, homeIsVisible }) => {
  //todo??----------------------------------------------------

  // const name = useSelector((state) => state.user.name);

  //todo??----------------------------------------------------

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
        <>
          <Form name={name} setName={setName} handleSubmit={handleSubmit} />
          <NavLink to="/readme" className="link home__link">
            ReadMe
          </NavLink>
        </>
      ) : (
        <Button text={"Go chat!"} type={"button"} buttonClickHandle={buttonChatClickHandle} buttonRef={buttonRef} />
      )}
    </div>
  );
};

export default Home;
