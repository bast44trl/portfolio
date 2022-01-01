import AboutMe from '../AboutMe/AboutMe';
import './homepage.scss';
import LandingScreen from '../LandingScreen/LandingScreen';

const Homepage = () => {
    return (
      <div className='homepage'>
        <LandingScreen />
        <AboutMe />
      </div>
    )
}

export default Homepage;