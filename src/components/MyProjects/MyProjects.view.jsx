import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';

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
  const leftCardProject = projectNb === 0 ? lastProject : previousProject;
  const rightCardProject =
    projectNb === lastProjectIndex ? firstProject : nextProject;

  return (
    <div className="my-projects">
      <div className="big-project-container">
        {/* card on the left side */}
        <div
          className={`${leftCardProject.className} project-left ${
            projectGoesLeft ? 'project-goes-left' : ''
          }`}
          onClick={() => projectMoveLeft()}
        >
          <ProjectCard
            image={leftCardProject.image}
            title={leftCardProject.title}
          />
        </div>
        {/* big card in the middle */}
        <div
          className={
            slowAppear
              ? `big-project slow-appear big-project-responsive ${currentProject.className}`
              : `big-project big-project-responsive ${currentProject.className}`
          }
        >
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
          className={`${rightCardProject.className} project-right ${
            projectGoesRight ? 'project-goes-right' : ''
          }`}
          onClick={() => projectMoveRight()}
        >
          <ProjectCard
            image={rightCardProject.image}
            title={rightCardProject.title}
          />
        </div>
      </div>
    </div>
  );
};

export default MyProjectsView;
