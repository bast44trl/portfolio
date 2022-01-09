import React from 'react';
import './logoCard.scss';

const LogoCard = (props) => {
    const { logo, techName, techText, link } = props;
          

    return (
        <div className='tech-container'>
            <a href={link} target={'_blank'} rel="noreferrer">
                <div className='tech-container'>    
                    <img src={logo} alt="" />
                    <div className='logo-card-infos'>
                        <h4 className='tech-name-p'>{techName}</h4>
                        <p className='tech-text-div'>{techText}</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default LogoCard;