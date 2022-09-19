import React, { useContext, useState, useEffect } from 'react';

import Context from '../../Context';

const AboutMePill = ({ type, length, details }) => {
  const { size, checked } = useContext(Context);
  const [sectionOpen, setSectionOpen] = useState('');

  const handleSectionOpen = () => {
    if (sectionOpen === '' || sectionOpen === '-close') {
      setSectionOpen('-open');
    }
    if (sectionOpen === '-open') {
      setSectionOpen('-close');
    }
  };

  useEffect(() => {
    checked && setSectionOpen('-off');
  }, [checked]);

  return (
    <div
      onClick={() => (size.width < 1370 ? handleSectionOpen() : {})}
      className={`section${sectionOpen}`}
    >
      <div className={`section-title${sectionOpen}`}>
        <h1>{type}</h1>
        <h3>{length}</h3>
      </div>
      <ul className={`section-infos${sectionOpen}`}>
        {details.map((detail, index) => (
          <li key={index}>
            {detail.includes('Spartan') ? (
              <>
                <span>{detail}</span>{' '}
                {sectionOpen.endsWith('open') && (
                  <a
                    className="spartan-a"
                    href="https://fr.spartan.com/fr/race/super"
                    target="blank"
                  >
                    🔗
                  </a>
                )}
              </>
            ) : (
              detail
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutMePill;
