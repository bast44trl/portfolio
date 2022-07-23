import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import LandingScreen from './components/LandingScreen/LandingScreen';
import MyTech from './components/MyTech/MyTech';
import AboutMe from './components/AboutMe/AboutMe';
import MyProjects from './components/MyProjects/MyProjects.container';
import { ContextProvider } from './Context';
import ThemeAndBackground from './components/ThemeAndBackground/ThemeAndBackground';
import Update from './components/Update/Update';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <ThemeAndBackground />
        <Update />
        <Routes>
          <Route path="*" element={<LandingScreen />} />
          <Route path="/mytech" element={<MyTech />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/myprojects" element={<MyProjects />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
