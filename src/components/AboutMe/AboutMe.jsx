import React, { useContext, Suspense } from 'react';

import Context from '../../Context';
import Loader from '../Loader/Loader';
import { aboutMeData } from './aboutMeData';

const AboutMe = () => {
  const { french } = useContext(Context);
  const AboutMePill = React.lazy(() => import('./AboutMePill'));

  return (
    <div className="about-me">
      <div className="about-me-title">
        <h1>{french ? 'Quelques trucs sur moi' : 'Some stuff about myself'}</h1>
      </div>
      <div className="sections">
        {aboutMeData.map((data, index) => (
          <Suspense fallback={<Loader />} key={index}>
            <AboutMePill
              type={french ? data.typeFR : data.typeEN}
              length={french ? data.lenghtFR : data.lenghtEN}
              details={french ? data.detailsFR : data.detailsEN}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
