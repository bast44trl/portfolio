import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Tech from "./components/Tech/Tech";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/tech" element={<Tech />} />
          <Route exact path="/aboutme" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
