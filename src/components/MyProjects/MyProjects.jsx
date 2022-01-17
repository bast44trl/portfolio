import React, { useEffect, useState } from 'react';
import './myProjects.scss';
import ProjectCard from './ProjectCard';
import lbm from '../../assets/projets/lbm2.png';
import dobby from '../../assets/projets/dobby2.jpg';
import llm from '../../assets/projets/llm.png';
import { useContext } from 'react';
import Context from '../../Context';

const MyProjects = () => {
    const { french } = useContext(Context);
    
    const projects = [{
        link: "https://bast44trl.github.io/laBelleMiche/",
        title: "La Belle Miche", 
        image: lbm,
        presentation: {
            name: "La Belle Miche", 
            team: 4, durationFR: "4 semaines", durationEN: "4 weeks", 
            textFR: "Le premier projet, quelques jours après mon entrée en formation à la Wild Code School, réalisé avec un brin d'humour, nous ayant surtout permit de prendre en main des outils tels que Git et GitHub, ainsi que l'utilisation de Flex et Grid en CSS",
            textEN: "My very first project, just few days after I started my training at Wild Code School. Realised with a tiny bit of humor, it allowed us to get used to Git and GitHub, but also made us use Flex and Grid on CSS"},

        },{
        link: "https://bast44trl.github.io/DobbyAndFriends/#/",
        title: "Dobby And Friends", 
        image: dobby, 
        presentation: {
            name: "Dobby And Friends", 
            team: 4, 
            durationFR: "5 semaines", durationEN: "5 weeks", 
            textFR: "Second projet lors de ma formation à la Wild Code School, il consistait à nous apprendre l'utilisation et la manipulation d'une API. Notre projet se base sur l'univers d'Harry Potter",
            textEN: "Second project during my training at Wild Code School, we learned how to use and manipulate an API. Our project is based on the universe of Harry Potter"},

        },{
        link: "https://bast44trl.github.io/LLM_WikiMusic",
        title: "Live Love Music", 
        image: llm, 
        presentation: {
            name: "Live Love Music", 
            team: 6, 
            durationFR: "31 heures", durationEN: "31 hours", 
            textFR: "Notre premier projet Hackaton lors de ma formation à la Wild Code School dont le thème donné le matin même était 'La musique'. Notre idée fut de créer un site permettant d'améliorer sa culture musicale",
            textEN: "Our first Hackaton project during my training at Wild Code School. Theme given in the morning was 'Music'. Our idea was to create a website to improve its musical knowledge"},
            /* warning: "https://cors-anywhere.herokuapp.com/corsdemo", */
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
                    presentationText={french ? projects[projectNb].presentation.textFR : projects[projectNb].presentation.textEN}
                    presentationName={projects[projectNb].presentation.name}
                    presentationDuration={french ? projects[projectNb].presentation.durationFR : projects[projectNb].presentation.durationEN}
                    presentationTeam={projects[projectNb].presentation.team}
                    link={projects[projectNb].link} />
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