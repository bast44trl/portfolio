import React, { useEffect, useState } from 'react';
import './myProjects.scss';
import ProjectCard from './ProjectCard';
import lbm from '../../assets/projets/lbm2.png';
import dobby from '../../assets/projets/dobby2.jpg';
import llm from '../../assets/projets/llm.png';

const MyProjects = () => {
    
    const projects = [{
        link: "https://bast44trl.github.io/laBelleMiche/",
        title: "La Belle Miche", 
        image: lbm,
        presentation: {
            name: "La Belle Miche", 
            team: 4, duration: "4 weeks", 
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel quae numquam sequi nesciunt, quas quo optio! Accusamus incidunt reiciendis quas assumenda ab, impedit iure animi dicta cum modi nobis!"},
            warning:""
        },{
        link: "https://bast44trl.github.io/DobbyAndFriends/#/",
        title: "Dobby And Friends", 
        image: dobby, 
        presentation: {
            name: "Dobby And Friends", 
            team: 4, 
            duration: "5 weeks", 
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel quae numquam sequi nesciunt, quas quo optio! Accusamus incidunt reiciendis quas assumenda ab, impedit iure animi dicta cum modi nobis!"},
            warning:""
        },{
        link: "https://bast44trl.github.io/LLM_WikiMusic",
        title: "Live Love Music", 
        image: llm, 
        presentation: {
            name: "Live Love Music", 
            team: 6, 
            duration: "31 hours", 
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel quae numquam sequi nesciunt, quas quo optio! Accusamus incidunt reiciendis quas assumenda ab, impedit iure animi dicta cum modi nobis!"},
            warning: "https://cors-anywhere.herokuapp.com/corsdemo",
        }];

    const [projectNb, setProjectNb] = useState(0); 
    const [slowAppear, setSlowAppear] = useState(false);
    const [projectGoesRight, setProjectGoesRight] = useState(false);
    const [projectGoesLeft, setProjectGoesLeft] = useState(false);
    
    const slowingAppear = () => {
        setSlowAppear(false);
    };

    const projectMoveLeft = () => {
        setProjectGoesLeft(!projectGoesLeft);
        if (projectNb===0) {
            setTimeout(() => {setProjectNb(projects.length-1)}, 600);
        } else {
            setTimeout(() => {setProjectNb(projectNb-1)}, 600);
        };
        setTimeout(() => {setProjectGoesLeft(false)}, 600);
    };

    const projectMoveRight = () => {
        setProjectGoesRight(!projectGoesRight);
        if (projectNb===projects.length-1) {
            setTimeout(() => {setProjectNb(0)}, 600);
        } else {
            setTimeout(() => {setProjectNb(projectNb+1)}, 600);
        };
        setTimeout(() => {setProjectGoesRight(false)}, 600);
    };

    useEffect(() => {
        setSlowAppear(true);
        setTimeout(() => slowingAppear(), 600);
    }, [projectNb]);

    return (
    <div className='my-projects'>
        <div className="big-project-container">
            <div
                className={`arrow-left ${projectGoesLeft?'project-goes-left':''}`}
                onClick={() => projectMoveLeft()}>
                    <ProjectCard
                        image={projectNb===0?projects[projects.length-1].image:projects[projectNb-1].image}
                        title={projectNb===0?projects[projects.length-1].title:projects[projectNb-1].title}
                    />
            </div>
            <div
                className={slowAppear? "big-project slow-appear" : "big-project"}>
                    <ProjectCard
                    image={projects[projectNb].image}
                    title={projects[projectNb].title}
                    presentationText={projects[projectNb].presentation.text}
                    presentationName={projects[projectNb].presentation.name}
                    presentationDuration={projects[projectNb].presentation.duration}
                    presentationTeam={projects[projectNb].presentation.team}
                    link={projects[projectNb].link}
                    warning={projects[projectNb].warning} />
            </div>
            <div
                className={`arrow-right ${projectGoesRight?'project-goes-right':''}`}
                onClick={() => projectMoveRight()}>
                    <ProjectCard
                    image={projectNb===projects.length-1?projects[0].image:projects[projectNb+1].image}
                    title={projectNb===projects.length-1?projects[0].title:projects[projectNb+1].title} />
            </div>
        </div>
    </div>
    );
};

export default MyProjects;