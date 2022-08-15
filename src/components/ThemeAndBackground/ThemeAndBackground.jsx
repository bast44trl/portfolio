import React, { useEffect, useContext } from 'react';

import Context from '../../Context';
import {
  desktopBackgrounds,
  mobileBackgrounds,
} from './ThemeAndBackgroundsData';
import matrixVideo from '../../assets/theme&backgrounds/matrix.mp4';

export const BackgroundsContainerDesktop = () => {
  const {
    french,
    currentBackground,
    setCurrentBackground,
    backgrounds,
    size,
    setChecked,
    setBurgerMenuBackground,
  } = useContext(Context);

  const handleBg = (e) => {
    const selectedBackground = backgrounds.find((bg) => e === bg.theme);
    setTimeout(() => {
      setCurrentBackground(selectedBackground);
      setBurgerMenuBackground(selectedBackground.color);
    }, 2000);
    setChecked(false);
    setCurrentBackground({
      video: matrixVideo,
      theme: 'matrix',
    });
  };

  if (size.width > 1320) {
    return (
      <div className="theme-container">
        <p>{french ? 'Choissisez votre ambiance' : 'Select your ambiance'}</p>
        <div className="bg-buttons">
          {desktopBackgrounds
            .filter((background) =>
              currentBackground.theme === 'matrix' ? '' : background
            )
            .map((bg, idx) => {
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
    );
  } else return null;
};

export const BackgroundsContainerMobile = () => {
  const {
    currentBackground,
    setCurrentBackground,
    backgrounds,
    setChecked,
    setBurgerMenuBackground,
  } = useContext(Context);

  const handleBg = (e) => {
    const selectedBackground = backgrounds.find((bg) => e === bg.theme);
    setCurrentBackground(selectedBackground);
    setBurgerMenuBackground(selectedBackground.color);
    setChecked(false);
  };

  return (
    <div className="bg-buttons-mobile">
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
  );
};

export const Background = () => {
  const {
    currentBackground,
    size,
    setCurrentBackground,
    backgrounds,
    setBackgrounds,
  } = useContext(Context);

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

  return (
    <div className="full-screen">
      <video
        className="video"
        preload="auto"
        autoPlay
        loop
        muted
        src={currentBackground.video}
        type="video/mp4"
      />
    </div>
  );
};
