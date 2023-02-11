import React from "react";
import "./form.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Form = ({ name, setName, handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input value={name} setValue={setName} text={"Enter your name"} />
      <Button text="Register" type="submit" />
    </form>
  );
};

export default Form;
