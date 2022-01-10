import './landingScreen.scss';
import Lottie from 'react-lottie';
import lottieDev from './lottie-dev.json';
import git from './../../assets/logo/git.png';
import linkedin from './../../assets/logo/linkedin.png';

const LandingScreen = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: lottieDev,
      };
    return (
        <div className='landing-screen'>
            <div className="container">
                <div className="div-name"><h1>BASTIEN TRAILLE</h1></div>
                <div className="div-dev"><h1>Web Developer</h1></div>
                <div className="div-lottie"><Lottie width="30vw" height="30vw" options={defaultOptions}/></div>
                <div className="links">
                    <a href="https://github.com/bast44trl" target="blank" className="git">
                        <img src={git} alt="My Github account" />
                    </a>
                    <a href="https://www.linkedin.com/in/bastientraille/" className="linkedin">
                        <img src={linkedin} alt="My LinkedIn account" />
                    </a>
                </div>      
            </div>
        </div>
    )
};

export default LandingScreen;