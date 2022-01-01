import './aboutMePill.scss';

const AboutMePill = (props) => {
    const {type, length, details } = props;
    return (
        <div className="section">
            <div className='section-title'>
                <h1>{type}</h1>
                <h3>{length}</h3>
            </div>
            <ul className="section-infos">
                {details.map((detail, index) => <li key={index}>{detail}</li>)}
            </ul>
        </div>
    )
};

export default AboutMePill;