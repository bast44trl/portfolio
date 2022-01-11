import React from 'react';
import './projectCard.scss';

const ProjectCard = (props) => {
    const { title, image, presentationText, presentationName, presentationDuration, presentationTeam, link, warning } = props;
    return (
        <a href={link} target={'blank'}>
            <div className='rotation'>
                <div className='project-card'>
                    <div className='project-card-inner'>
                        <div className='project-card-front'>
                            <div className='project-card-img'><img src={image} alt="" /></div>
                            <h2>{title}</h2>
                        </div>
                        <div className='project-card-back'>
                            <h2>{presentationName}</h2>
                            <p>Duration : {presentationDuration}</p>
                            <p>Project realised by a team of {presentationTeam} student devs</p>
                            <p>{presentationText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;