import React, { createContext, useState } from 'react';

import useWindowSize from './hooks/useWindowSize';

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
  const [burgerMenuBackground, setBurgerMenuBackground] = useState(
    'radial-gradient(#afd0ed, #fff)'
  );
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
        burgerMenuBackground,
        setBurgerMenuBackground,
      }}
    >
      {children}
    </Context.Provider>
  );
};
