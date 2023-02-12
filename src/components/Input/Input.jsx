import React from "react";
import "./input.scss";

const Input = ({ value, setValue, text }) => {
  //todo --------------------------------------------
  // const [focused, setFocused] = useState(false);

  // useEffect = () => {
  //   if (inputRef.focused) {
  //     setFocused(true);
  //     console.log(focused);
  //   } else {
  //     setFocused(false);
  //     console.log(focused);
  //   }
  // };

  //todo --------------------------------------------

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input-container">
      <input
        id="inputName"
        className="input"
        type="text"
        placeholder=" "
        value={value}
        onChange={handleChange}
        // ref={inputRef}
      />
      <div className="cut"></div>
      <label htmlFor="inputName" className="placeholder">
        {text}
      </label>
    </div>
  );
};

export default Input;
