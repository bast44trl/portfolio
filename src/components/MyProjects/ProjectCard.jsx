import React from 'react';
import './projectCard.scss';

const ProjectCard = (props) => {
    const { title, image, presentation, link } = props;
    return (
        <a href={link}>
            <div className='project-card'>
                <div className='project-card-inner'>
                    <div className='project-card-front'>
                        <img src={image} alt="" />
                        <h2>{title}</h2>
                    </div>
                    <div className='project-card-back'>
                        <p>{presentation}</p>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;