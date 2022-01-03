import './landingScreen.scss';
import Lottie from 'react-lottie';
import lottieDev from './lottie-dev.json';

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
            </div>
        </div>
    )
};

export default LandingScreen;