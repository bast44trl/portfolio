import React from 'react';
import sunsetVideo from '../../assets/theme&backgrounds/sunsetVideo.mp4';
import smokeVideo from '../../assets/theme&backgrounds/smokeVideo.mp4';
import montainVideo from '../../assets/theme&backgrounds/montainVideo.mp4';
import oceanVideo from '../../assets/theme&backgrounds/oceanVideo.mp4';
import techVideo from '../../assets/theme&backgrounds/techVideo.mp4';
import montainImg from '../../assets/theme&backgrounds/montainImg.png';
import smokeImg from '../../assets/theme&backgrounds/smokeImg.png';
import oceanImg from '../../assets/theme&backgrounds/oceanImg.png';
import sunsetImg from '../../assets/theme&backgrounds/sunsetImg.png';
import techImg from '../../assets/theme&backgrounds/techImg.png';
import { useContext } from 'react';
import Context from '../../Context';

export const ThemeAndBackground = ({ setBackground }) => {
  const { french } = useContext(Context);
  async function handleBgSunset() {
    await setBackground('Sunset');
  }
  async function handleBgMontains() {
    await setBackground('Montains');
  }
  async function handleBgSmoke() {
    await setBackground('Smoke');
  }
  async function handleBgOcean() {
    await setBackground('Ocean');
  }
  async function handleBgTech() {
    await setBackground('');
  }

  return (
    <div className="theme-container">
      <p>{french ? 'Choissisez votre ambiance' : 'Select your ambiance'}</p>
      <div className="bg-buttons">
        <div className="bg-montains" onClick={() => handleBgMontains()}>
          <img src={montainImg} alt="montains" />
        </div>
        <div className="bg-sunset" onClick={() => handleBgSunset()}>
          <img src={sunsetImg} alt="sunset" />
        </div>
        <div className="bg-smoke" onClick={() => handleBgSmoke()}>
          <img src={smokeImg} alt="smoke" />
        </div>
        <div className="bg-ocean" onClick={() => handleBgOcean()}>
          <img src={oceanImg} alt="ocean" />
        </div>
        <div className="bg-tech" onClick={() => handleBgTech()}>
          <img src={techImg} alt="tech" />
        </div>
      </div>
    </div>
  );
};

export const BackgroundTech = () => {
  return (
    <div className="full-screen">
      <video className="video" autoPlay loop muted>
        <source src={techVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export const BackgroundSunset = () => {
  return (
    <div className="full-screen">
      <video className="video" autoPlay loop muted>
        <source src={sunsetVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export const BackgroundMontains = () => {
  return (
    <div className="full-screen">
      <video className="video" autoPlay loop muted>
        <source src={montainVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export const BackgroundSmoke = () => {
  return (
    <div className="full-screen">
      <video className="video" autoPlay loop muted>
        <source src={smokeVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export const BackgroundOcean = () => {
  return (
    <div className="full-screen">
      <video className="video" autoPlay loop muted>
        <source src={oceanVideo} type="video/mp4" />
      </video>
    </div>
  );
};
