import React from 'react';
import ProjectCard from './ProjectCard';

const MyProjectsView = ({
  lastProjectIndex,
  projectNb,
  firstProject,
  lastProject,
  previousProject,
  nextProject,
  currentProject,
  french,
  slowAppear,
  projectMoveLeft,
  projectMoveRight,
  projectGoesLeft,
  projectGoesRight,
}) => {
  return (
    <div className="my-projects">
      <div className="big-project-container">
        {/* card on the left side */}
        <div
          className={`project-left ${
            projectGoesLeft ? 'project-goes-left' : ''
          }`}
          onClick={() => projectMoveLeft()}
        >
          <ProjectCard
            image={projectNb === 0 ? lastProject.image : previousProject.image}
            title={projectNb === 0 ? lastProject.title : previousProject.title}
          />
        </div>
        {/* big card in the middle */}
        <div className={slowAppear ? 'big-project slow-appear' : 'big-project'}>
          <ProjectCard
            image={currentProject.image}
            title={currentProject.title}
            techs={currentProject.techs}
            presentationText={
              french
                ? currentProject.presentation.textFR
                : currentProject.presentation.textEN
            }
            presentationDuration={
              french
                ? currentProject.presentation.durationFR
                : currentProject.presentation.durationEN
            }
            presentationDates={
              french
                ? currentProject.presentation.datesFR
                : currentProject.presentation.datesEN
            }
            presentationTeam={currentProject.presentation.team}
            link={currentProject.link}
          />
        </div>
        {/* card on the right side */}
        <div
          className={`project-right ${
            projectGoesRight ? 'project-goes-right' : ''
          }`}
          onClick={() => projectMoveRight()}
        >
          <ProjectCard
            image={
              projectNb === lastProjectIndex
                ? firstProject.image
                : nextProject.image
            }
            title={
              projectNb === lastProjectIndex
                ? firstProject.title
                : nextProject.title
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MyProjectsView;
