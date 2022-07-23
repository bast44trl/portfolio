import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';
import { useContext } from 'react';
import Context from '../../Context';

const MyProjects = () => {
  const { french } = useContext(Context);
  const [projectNb, setProjectNb] = useState(0);
  const [slowAppear, setSlowAppear] = useState(false);
  const [projectGoesRight, setProjectGoesRight] = useState(false);
  const [projectGoesLeft, setProjectGoesLeft] = useState(false);

  const slowingAppear = () => {
    setSlowAppear(false);
  };

  const projectMoveLeft = () => {
    setProjectGoesLeft(!projectGoesLeft);
    if (projectNb === 0) {
      setTimeout(() => {
        setProjectNb(projects.length - 1);
      }, 600);
    } else {
      setTimeout(() => {
        setProjectNb(projectNb - 1);
      }, 600);
    }
    setTimeout(() => {
      setProjectGoesLeft(false);
    }, 600);
  };

  const projectMoveRight = () => {
    setProjectGoesRight(!projectGoesRight);
    if (projectNb === projects.length - 1) {
      setTimeout(() => {
        setProjectNb(0);
      }, 600);
    } else {
      setTimeout(() => {
        setProjectNb(projectNb + 1);
      }, 600);
    }
    setTimeout(() => {
      setProjectGoesRight(false);
    }, 600);
  };

  useEffect(() => {
    setSlowAppear(true);
    setTimeout(() => slowingAppear(), 600);
  }, [projectNb]);

  return (
    <div className="my-projects">
      <div className="big-project-container">
        <div
          className={`arrow-left ${projectGoesLeft ? 'project-goes-left' : ''}`}
          onClick={() => projectMoveLeft()}
        >
          <ProjectCard
            image={
              projectNb === 0
                ? projects[projects.length - 1].image
                : projects[projectNb - 1].image
            }
            title={
              projectNb === 0
                ? projects[projects.length - 1].title
                : projects[projectNb - 1].title
            }
          />
        </div>
        <div className={slowAppear ? 'big-project slow-appear' : 'big-project'}>
          <ProjectCard
            image={projects[projectNb].image}
            title={projects[projectNb].title}
            techs={projects[projectNb].techs}
            presentationText={
              french
                ? projects[projectNb].presentation.textFR
                : projects[projectNb].presentation.textEN
            }
            presentationName={projects[projectNb].presentation.name}
            presentationDuration={
              french
                ? projects[projectNb].presentation.durationFR
                : projects[projectNb].presentation.durationEN
            }
            presentationDates={
              french
                ? projects[projectNb].presentation.datesFR
                : projects[projectNb].presentation.datesEN
            }
            presentationTeam={projects[projectNb].presentation.team}
            link={projects[projectNb].link}
          />
        </div>
        <div
          className={`arrow-right ${
            projectGoesRight ? 'project-goes-right' : ''
          }`}
          onClick={() => projectMoveRight()}
        >
          <ProjectCard
            image={
              projectNb === projects.length - 1
                ? projects[0].image
                : projects[projectNb + 1].image
            }
            title={
              projectNb === projects.length - 1
                ? projects[0].title
                : projects[projectNb + 1].title
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
