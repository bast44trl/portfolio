import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import LandingScreen from './components/LandingScreen/LandingScreen';
import MyTech from './components/MyTech/MyTech';
import AboutMe from './components/AboutMe/AboutMe';
import MyProjects from './components/MyProjects/MyProjects';
import { ContextProvider } from './Context';
import { backgrounds } from './components/ThemeAndBackground/ThemeAndBackground';
import {
  ThemeAndBackground,
  BackgroundTech,
  BackgroundSunset,
  BackgroundMontains,
  BackgroundSmoke,
  BackgroundOcean,
} from './components/ThemeAndBackground/ThemeAndBackground';
import Update from './components/Update/Update';

function App() {
  const [background, setBackground] = useState();

  useEffect(() => {
    cacheBackgrounds(backgrounds);
  }, []);

  const cacheBackgrounds = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const bg = new MediaSource();
        bg.src = src;
        bg.onload = resolve();
        bg.onerror = reject();
      });
    });
    await Promise.all(promises);
  };

  return (
    <ContextProvider>
      <div className="App">
        <Header />
        {!background && <BackgroundTech />}
        {background === 'Sunset' && <BackgroundSunset />}
        {background === 'Montains' && <BackgroundMontains />}
        {background === 'Smoke' && <BackgroundSmoke />}
        {background === 'Ocean' && <BackgroundOcean />}
        <Update />
        <Routes>
          <Route path="*" element={<LandingScreen />} />
          <Route path="/welcome" element={<LandingScreen />} />
          <Route path="/mytech" element={<MyTech />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/myprojects" element={<MyProjects />} />
        </Routes>
        <ThemeAndBackground setBackground={setBackground} />
      </div>
    </ContextProvider>
  );
}

export default App;
