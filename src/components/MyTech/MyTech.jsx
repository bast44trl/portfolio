import './myTech.scss';
import techVideo from '../../assets/techVideo.mp4'

const Tech = () => {
    return (
        <div className="tech">
            <video className="tech-video" autoPlay loop muted>
                <source src={techVideo} type='video/mp4'/>
            </video>
            <div className="overlay"></div>
            <div className="tech-content">
                <h1>Here are technologies I use</h1>
            </div>
        </div>
    )
};

export default Tech;
