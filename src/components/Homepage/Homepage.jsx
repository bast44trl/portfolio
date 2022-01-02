import AboutMe from '../AboutMe/AboutMe';
import './homepage.scss';
import LandingScreen from '../LandingScreen/LandingScreen';
import Tech from '../Tech/Tech';

const Homepage = () => {
    return (
      <div className='homepage'>
        <LandingScreen />
        <Tech />
        <AboutMe />
      </div>
    )
}

export default Homepage;