import React, { useContext } from 'react';

import Context from '../../Context';
import team from '../../assets/stats/team.png';
import duration from '../../assets/stats/duration.png';
import calendar from '../../assets/stats/calendar.png';

const ProjectCard = (props) => {
  const {
    title,
    image,
    techs,
    presentationText,
    presentationName,
    presentationDuration,
    presentationDates,
    presentationTeam,
    link,
  } = props;
  const { french } = useContext(Context);
  console.log(techs);
  return (
    <a href={link} target={'blank'}>
      <div className="rotation">
        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-card-front">
              <div className="project-card-img">
                <img src={image} alt="" />
              </div>
              <h2>{title}</h2>
            </div>
            <div className="project-card-back">
              <h2>{presentationName}</h2>
              <div className="stats-tech">
                {techs &&
                  techs.map((tech, idx) => <img src={tech} alt="" key={idx} />)}
              </div>
              <div className="card-back-stats">
                <div className="stats-duration">
                  <img src={duration} alt="" />
                  <span>{presentationDuration}</span>
                </div>
                <div className="stats-team">
                  <img src={team} alt="" />
                  <span>
                    {french
                      ? `${presentationTeam} étudiants développeurs`
                      : `${presentationTeam} student devs`}
                  </span>
                </div>
                <div className="stats-calendar">
                  <img src={calendar} alt="" />
                  <span>{presentationDates}</span>
                </div>
              </div>
              <p>{presentationText}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
