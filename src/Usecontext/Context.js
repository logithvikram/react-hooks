import React, { useState, createContext } from "react";
import Login from "./form";
import User from "./user";

export const AppContext = createContext(null);

function Context() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}> 
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default Context;