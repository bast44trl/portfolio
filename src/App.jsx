import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingScreen from "./components/LandingScreen/LandingScreen";
import MyTech from "./components/MyTech/MyTech";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Header />
        <div className="update">Portfolio non terminé, merci pour votre indulgence :{`)`}</div>
        <Routes>
          <Route exact path="/" element={<LandingScreen />} />
          <Route exact path="/mytech" element={<MyTech />} />
          <Route exact path="/aboutme" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
