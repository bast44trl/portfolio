import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingScreen from "./components/LandingScreen/LandingScreen";
import MyTech from "./components/MyTech/MyTech";
import AboutMe from "./components/AboutMe/AboutMe";
import MyProjects from "./components/MyProjects/MyProjects";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/portfolio" element={<LandingScreen />}>
        <Header />
        <div className="update">Portfolio non terminé, merci pour votre indulgence :{`)`}</div>
        <Routes>
          <Route path="/welcome" element={<LandingScreen />} />
          <Route path="/mytech" element={<MyTech />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/myprojects" element={<MyProjects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
