import React, { useEffect, useState } from 'react';
import MyProjectsView from './MyProjects.view';
import { projects } from './projectsData';
import { useContext } from 'react';
import Context from '../../Context';

const MyProjectsContainer = () => {
  const { french } = useContext(Context);
  const [projectNb, setProjectNb] = useState(0);
  const [slowAppear, setSlowAppear] = useState(false);
  const [projectGoesRight, setProjectGoesRight] = useState(false);
  const [projectGoesLeft, setProjectGoesLeft] = useState(false);
  const firstProject = projects[0];
  const lastProject = projects[projects.length - 1];
  const lastProjectIndex = projects.length - 1;
  const previousProject = projects[projectNb - 1];
  const nextProject = projects[projectNb + 1];
  const currentProject = projects[projectNb];

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
    <MyProjectsView
      projectNb={projectNb}
      firstProject={firstProject}
      lastProject={lastProject}
      previousProject={previousProject}
      nextProject={nextProject}
      currentProject={currentProject}
      lastProjectIndex={lastProjectIndex}
      french={french}
      slowAppear={slowAppear}
      projectMoveLeft={projectMoveLeft}
      projectMoveRight={projectMoveRight}
      projectGoesLeft={projectGoesLeft}
      projectGoesRight={projectGoesRight}
    ></MyProjectsView>
  );
};

export default MyProjectsContainer;
