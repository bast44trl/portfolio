import React, { createContext, useState } from 'react';

import useWindowSize from './Hooks/useWindowSize';

const Context = createContext({
  french: false,
  setFrench: () => {},
});
export default Context;

export const ContextProvider = ({ children }) => {
  const [french, setFrench] = useState(false);
  const [checked, setChecked] = useState(false);
  const [currentBackground, setCurrentBackground] = useState({});
  const [backgrounds, setBackgrounds] = useState([]);
  const size = useWindowSize();

  function handleCheck() {
    setChecked(!checked);
  }

  return (
    <Context.Provider
      value={{
        french,
        setFrench,
        checked,
        setChecked,
        handleCheck,
        currentBackground,
        setCurrentBackground,
        backgrounds,
        setBackgrounds,
        size,
      }}
    >
      {children}
    </Context.Provider>
  );
};
