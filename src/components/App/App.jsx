import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../../pages/Home/Home";
import Chat from "../../pages/Chat/Chat";
import RegisterPlease from "../../pages/RegisterPlease/RegisterPlease";

import "./app.scss";

function App() {
  const [name, setName] = useState(""); //! нужен ли?
  const [homeIsVisible, setHomeIsVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("handleSubmit");
    console.log(name);
    if (name === "") {
      console.log("Enter your name");
      return;
    } else {
      console.log("Name is", name);
      // console.log(e.target.value);
      setHomeIsVisible(false); //!менять state можно только в родителе? (не в дочернем компоненте)
    }
  };

  return (
    <div className="App">
      {/* <h1 className="app __title">appTitle</h1> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                homeIsVisible={homeIsVisible}
                setHomeIsVisible={setHomeIsVisible}
                handleSubmit={handleSubmit}
              />
            }
          />
          {name && <Route path="/chat" element={<Chat name={name} />} />}
          <Route path="*" element={<RegisterPlease />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
