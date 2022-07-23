import React, { useState, useContext } from 'react';

import Context from '../../Context';
import backgrounds from './ThemeAndBackgroundsData';

const ThemeAndBackground = () => {
  const { french } = useContext(Context);
  const [backgroundVideo, setBackgroundVideo] = useState(backgrounds[1].video);

  const handleBg = (e) => {
    const selectedBackground = backgrounds.find((bg) => e === bg.theme);
    setBackgroundVideo(selectedBackground.video);
  };
  return (
    <>
      <div className="theme-container">
        <p>{french ? 'Choissisez votre ambiance' : 'Select your ambiance'}</p>
        <div className="bg-buttons">
          {backgrounds.map((bg, idx) => {
            if (bg.video !== backgroundVideo) {
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
          src={backgroundVideo}
          type="video/mp4"
        />
      </div>
    </>
  );
};

export default ThemeAndBackground;
