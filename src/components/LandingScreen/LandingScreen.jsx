import git from '../../assets/logo/svg/github.svg';
import linkedin from '../../assets/logo/svg/linkedin.svg';
import email from '../../assets/logo/email.webp';
import cv from '../../assets/curriculum/curriculum.svg';
import frenchResume from '../../assets/curriculum/frenchResume.pdf';
import englishResume from '../../assets/curriculum/englishResume.pdf';
import { useContext } from 'react';
import Context from '../../Context';

const LandingScreen = () => {
  const { french, currentBackground } = useContext(Context);
  return (
    <div className="landing-screen">
      <div className="container">
        <div className="div-name">
          <h1>BASTIEN TRAILLE</h1>
        </div>
        <div className="div-dev">
          <h1>
            {french ? 'Développeur Web Front-End' : 'Front-End Web Developer'}
          </h1>
        </div>
        <div className="links">
          <a
            href="https://github.com/bast44trl"
            target="blank"
            className={
              currentBackground.theme === 'space' ||
              currentBackground.theme === 'forest' ||
              currentBackground.theme === 'matrix'
                ? 'white-git'
                : 'git'
            }
          >
            <img src={git} alt="My Github account" />
          </a>
          <a
            href="https://www.linkedin.com/in/bastientraille/"
            className="linkedin"
          >
            <img src={linkedin} alt="My LinkedIn account" />
          </a>
          <a href={french ? frenchResume : englishResume} target="blank">
            <img src={cv} alt="curriculum" />
          </a>
          <a href="mailto:bastien.traille@gmail.com">
            <img src={email} alt="email icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
