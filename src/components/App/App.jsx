import React, { useState } from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

import Home from "../../pages/Home/Home";
import Chat from "../../pages/Chat/Chat";
import RegisterPlease from "../../pages/RegisterPlease/RegisterPlease";
import ReadMe from "../../pages/ReadMe/ReadMe";

import "./app.scss";

function App() {
  const [name, setName] = useState("");
  const [homeIsVisible, setHomeIsVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    if (!name.trim()) {
      console.log("Enter your name");
      return;
    } else {
      console.log("Name is", name);
      setHomeIsVisible(false);
    }
  };

  return (
    <div className="App">
      <HashRouter>
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
          <Route path="/readme" element={<ReadMe />} />
          <Route path="*" element={<RegisterPlease />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
