import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingScreen from "./components/LandingScreen/LandingScreen";
import MyTech from "./components/MyTech/MyTech";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter basename="/portfolio/welcome">
=======
      <BrowserRouter basename="/portfolio">
>>>>>>> 8c5bbc1c05e0c52a5d9759944f8ff435f531f353
        <Header />
        <div className="update">Portfolio non terminé, merci pour votre indulgence :{`)`}</div>
        <Routes>
          <Route path="/welcome" element={<LandingScreen />} />
          <Route exact path="/mytech" element={<MyTech />} />
          <Route exact path="/aboutme" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
