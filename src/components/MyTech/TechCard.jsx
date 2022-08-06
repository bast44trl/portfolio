import React, { useContext } from 'react';

import Context from '../../Context';

const LogoCard = ({ logo, techName, techText, link }) => {
  const { size } = useContext(Context);
  function handleCardClick(e) {
    size.width < 1370 && e.preventDefault();
  }
  return (
    <div className="tech-container">
      <a
        href={link}
        target={'_blank'}
        rel="noreferrer"
        onClick={(e) => handleCardClick(e)}
      >
        <img src={logo} alt="" />
        <div className="logo-card-infos">
          <h4 className="tech-name-p">{techName}</h4>
          <p className="tech-text-div">{techText}</p>
        </div>
      </a>
    </div>
  );
};

export default LogoCard;
