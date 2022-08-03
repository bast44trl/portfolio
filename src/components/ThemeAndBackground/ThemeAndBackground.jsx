import React, { useState, useEffect, useContext } from 'react';

import Context from '../../Context';
import {
  desktopBackgrounds,
  mobileBackgrounds,
} from './ThemeAndBackgroundsData';
import useWindowSize from '../../Hooks/useWindowSize';

const ThemeAndBackground = () => {
  const { french } = useContext(Context);
  const [currentBackground, setCurrentBackground] = useState({});
  const [backgrounds, setBackgrounds] = useState([]);
  const size = useWindowSize();

  const handleBg = (e) => {
    const selectedBackground = backgrounds.find((bg) => e === bg.theme);
    setCurrentBackground(selectedBackground);
  };

  useEffect(() => {
    setCurrentBackground(
      size.width < size.height
        ? { ...mobileBackgrounds[0] }
        : { ...desktopBackgrounds[0] }
    );
  }, []);

  useEffect(() => {
    setBackgrounds(
      size.width < size.height ? mobileBackgrounds : desktopBackgrounds
    );
  }, [size]);

  useEffect(() => {
    const selectedBackground = backgrounds.find(
      (bg) => bg.theme === currentBackground.theme
    );
    !!selectedBackground && setCurrentBackground(selectedBackground);
  }, [backgrounds]);
  console.log(currentBackground);
  return (
    <>
      <div className="theme-container">
        <p>{french ? 'Choissisez votre ambiance' : 'Select your ambiance'}</p>
        <div className="bg-buttons">
          {desktopBackgrounds.map((bg, idx) => {
            if (bg.theme !== currentBackground.theme) {
              return (
                <div
                  key={idx}
                  className={`bg-${bg.theme}`}
                  onClick={(e) => handleBg(e.target.alt)}
                >
                  <img src={bg.image} alt={bg.theme} />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="full-screen">
        <video
          className="video"
          autoPlay
          loop
          muted
          src={currentBackground.video}
          type="video/mp4"
        />
      </div>
    </>
  );
};

export default ThemeAndBackground;
