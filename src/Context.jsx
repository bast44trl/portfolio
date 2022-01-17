import React,{ createContext, useState } from "react";

const Context = createContext({
    french: false,
    setFrench: () => {},
  });
  export default Context;
  
  export const ContextProvider = ({ children }) => {
    const [french, setFrench] = useState(false);

    return (
      <Context.Provider
        value={{ french, setFrench }}
      >
        {children}
      </Context.Provider>
    );
  };