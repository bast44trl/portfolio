import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import LandingScreen from './components/LandingScreen/LandingScreen';
import MyTech from './components/MyTech/MyTech';
//import AboutMe from './components/AboutMe/AboutMe';
import MyProjects from './components/MyProjects/MyProjects.container';
import { ContextProvider } from './Context';
import {
  //Background,
  BackgroundsContainerDesktop,
} from './components/ThemeAndBackground/ThemeAndBackground';

const Background = React.lazy(() =>
  import('./components/ThemeAndBackground/ThemeAndBackground')
);
const AboutMe = React.lazy(() => import('./components/AboutMe/AboutMe'));

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <BackgroundsContainerDesktop />
        <Suspense
          fallback={
            <div>
              <h1>Loading...</h1>
            </div>
          }
        >
          <Background />
        </Suspense>
        <Routes>
          <Route path="*" element={<LandingScreen />} />
          <Route path="/mytech" element={<MyTech />} />
          <Route
            path="/aboutme"
            element={
              <Suspense
                fallback={
                  <div>
                    <h1>Loading...</h1>
                  </div>
                }
              >
                <AboutMe />
              </Suspense>
            }
          />
          <Route path="/myprojects" element={<MyProjects />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
