import React, { useEffect, useState } from 'react';
import './myProjects.scss';

const MyProjects = () => {
    const projects = ["La Belle Miche", "Dobby And Friends", "LLM"];
    const [projectNb, setProjectNb] = useState(0); 
    const [slowAppear, setSlowAppear] = useState(false);
    const slowingAppear = () => {
        setSlowAppear(false);
    };
    const projectMoveLeft = () => {
        if (projectNb===0) {
            setProjectNb(projects.length-1);
        } else {
            setProjectNb(projectNb-1);
        };
    }
    const projectMoveRight = () => {
        if (projectNb===projects.length-1) {
            setProjectNb(0);
        } else {
            setProjectNb(projectNb+1);
        };
    }
    useEffect(() => {
        setSlowAppear(true);
        setTimeout(() => slowingAppear(), 500);
    }, [projectNb]);
    return (
    <div className='my-projects'>
        <div className="big-project-container">
            <div className="arrow-left" onClick={() => projectMoveLeft()}><img src={projectNb===0?projects[projects.length-1]:projects[projectNb-1]} alt="" /><p>{projectNb===0?projects[projects.length-1]:projects[projectNb-1]}</p></div>
            <div className={slowAppear? "big-project slow-appear" : "big-project"}><img src={projects[projectNb]} alt="" /><p>{projects[projectNb]}</p></div>
            <div className="arrow-right" onClick={() => projectMoveRight()}><img src={projectNb===projects.length-1?projects[0]:projects[projectNb+1]} alt="" /><p>{projectNb===projects.length-1?projects[0]:projects[projectNb+1]}</p></div>
        </div>
    </div>
    );
};

export default MyProjects;