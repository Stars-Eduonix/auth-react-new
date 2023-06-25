
import React from "react";
import "./App.css";
import {Routes,Route} from "react-router-dom";

import SignUp from "./Components/Signup";
import Login from "./Components/Login";
import Secret from "./Components/Secret";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/secret" element={<Secret />} />

      </Routes>
    </div>
  );
}

export default App;