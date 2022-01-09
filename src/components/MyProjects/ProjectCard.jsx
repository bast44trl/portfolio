import React from 'react';
import './projectCard.scss';

const ProjectCard = (props) => {
    const { title, image, presentation, link } = props;
    return (
        <a href={link}>
            <div className='project-card'>
                <img src={image} alt="" />
                <h2>{title}</h2>
            </div>
        </a>
    );
};

export default ProjectCard;