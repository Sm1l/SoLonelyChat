import React from "react";
import { useDispatch } from "react-redux";

import { setName } from "../../store/userSlice";

import "./input.scss";

const Input = ({ value, setValue, text }) => {
  // const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
    // dispatch(setName(e.target.value));
  };

  return (
    <div className="input-container">
      <input id="inputName" className="input" type="text" placeholder=" " value={value} onChange={handleChange} />
      <div className="cut"></div>
      <label htmlFor="inputName" className="placeholder">
        {text}
      </label>
    </div>
  );
};

export default Input;
