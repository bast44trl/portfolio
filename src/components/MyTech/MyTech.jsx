import TechCard from './TechCard';
import { useContext } from 'react';
import Context from '../../Context';
import { logos } from './techData';

const Tech = () => {
  const { french } = useContext(Context);

  return (
    <div className="overlay">
      <div className="tech-content">
        <h1 className={french ? 'french-tech-title' : 'english-tech-title'}>
          {french
            ? 'Mes langages et technologies'
            : 'Here are technologies I use'}
        </h1>
        <div className="all-tech-container">
          {logos.map((logo, index) => (
            <TechCard
              className="logo-card"
              key={index}
              index={index}
              logo={logo.logo}
              techName={logo.techName}
              techText={french ? logo.techTextFrench : logo.techTextEnglish}
              link={logo.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
