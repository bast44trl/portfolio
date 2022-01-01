import AboutMePill from './AboutMePill';
import './aboutMe.scss';

const AboutMe = () => {
    const infos = [
        {
            type: "AUSTRALIA",
            lenght: "2 years",
            details: ["Backpacking for 7 months around Australia", "Educator in a Childcare Center in Sydney, NSW", "DIESEL Store manager in Sydney, NSW"],
        },{
            type: "USA",
            lenght: "1 year",
            details: ["6 months in Seattle, WA", "6 months in San Francisco, CA", "Au Pair taking care of an autistic boy and his 2 younger brothers"],
        },{
            type: "Sports",
            lenght: "",
            details: ["Seattle Half Marathon", "Sydney Spartan Race", "Track cycling national championships medalist"],
        },{
            type: "Hobbies",
            lenght: "",
            details: ["Bass player", "Pop culture enthousiast", "Hiking", "Theater"],
        },];

    return (
        <div className="about-me">
            <div className="about-me-title">
            <h1>About Me</h1>
            </div>
            <div className="sections">
               {infos.map((e, index) => <AboutMePill key={index} type={e.type} length={e.lenght} details={e.details} />)}
            </div>
        </div>
    )
};

export default AboutMe;