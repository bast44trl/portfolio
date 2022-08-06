import React, { useContext } from 'react';

import AboutMePill from './AboutMePill';
import Context from '../../Context';
import { aboutMeData } from './aboutMeData';

const AboutMe = () => {
  const { french } = useContext(Context);

  return (
    <div className="about-me">
      <div className="about-me-title">
        <h1>{french ? 'Quelques trucs sur moi' : 'Some stuff about myself'}</h1>
      </div>
      <div className="sections">
        {aboutMeData.map((data, index) => (
          <AboutMePill
            key={index}
            type={french ? data.typeFR : data.typeEN}
            length={french ? data.lenghtFR : data.lenghtEN}
            details={french ? data.detailsFR : data.detailsEN}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
