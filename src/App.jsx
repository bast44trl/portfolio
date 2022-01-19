import "./app.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingScreen from "./components/LandingScreen/LandingScreen";
import MyTech from "./components/MyTech/MyTech";
import AboutMe from "./components/AboutMe/AboutMe";
import MyProjects from "./components/MyProjects/MyProjects";
import { ContextProvider } from "./Context";
import { ThemeAndBackground, BackgroundTech, BackgroundSunset, BackgroundMontains, BackgroundSmoke, BackgroundOcean } from "./components/ThemeAndBackground/ThemeAndBackground";
import { useState } from "react";
import Update from "./components/Update/Update";

function App() {
const [background, setBackground] = useState();

  return (
    <ContextProvider>
      <div className="App">
      <Header />
      {!background && <BackgroundTech />}
      {background === "Sunset" && <BackgroundSunset />}
      {background === "Montains" && <BackgroundMontains />}
      {background === "Smoke" && <BackgroundSmoke />}
      {background === "Ocean" && <BackgroundOcean />}
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
