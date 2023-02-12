import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

import "./form.scss";

const Form = ({ name, setName, handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input value={name} setValue={setName} text={"Enter your name"} />
      <Button text="Register" type="submit" />
    </form>
  );
};

export default Form;
