/* import Lottie from 'react-lottie';
import lottieDev from './lottie-dev.json'; */
import git from './../../assets/logo/svg/github.svg';
import linkedin from './../../assets/logo/svg/linkedin.svg';
import email from './../../assets/logo/email.webp';
import { useContext } from 'react';
import Context from '../../Context';

const LandingScreen = () => {
  /*     const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: lottieDev,
      }; */

  const { french } = useContext(Context);
  return (
    <div className="landing-screen">
      <div className="container">
        <div className="div-name">
          <h1>BASTIEN TRAILLE</h1>
        </div>
        <div className="div-dev">
          <h1>
            {french ? 'Développeur Web Full Stack' : 'Full Stack Web Developer'}
          </h1>
        </div>
        <div className="links">
          <a href="https://github.com/bast44trl" target="blank" className="git">
            <img src={git} alt="My Github account" />
          </a>
          <a href="mailto:bastien.traille@gmail.com">
            <img src={email} alt="email icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/bastientraille/"
            className="linkedin"
          >
            <img src={linkedin} alt="My LinkedIn account" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
