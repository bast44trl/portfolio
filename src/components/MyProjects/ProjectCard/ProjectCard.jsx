import React, { useContext } from 'react';

import Context from '../../../Context';
/* import team from '../../../assets/stats/team.webp';
import duration from '../../../assets/stats/duration.webp';
import calendar from '../../../assets/stats/calendar.webp'; */
import team from '../../../assets/stats/team.svg';
import duration from '../../../assets/stats/duration.svg';
import calendar from '../../../assets/stats/calendar.svg';

const ProjectCard = (props) => {
  const {
    title,
    image,
    techs,
    presentationText,
    presentationDuration,
    presentationDates,
    presentationTeam,
    link,
  } = props;
  const { french, size } = useContext(Context);
  function handleResponsiveFlip(e) {
    e.target.className !== 'project-button' && e.preventDefault();
  }
  return (
    <a
      href={link}
      target={'blank'}
      defaultValue="card"
      value="card"
      onClick={size.width < 1320 ? (e) => handleResponsiveFlip(e) : undefined}
    >
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
              <h2>{title}</h2>
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
                      ? `${presentationTeam} étudiants dév${
                          presentationTeam === 1 ? 'eloppeur' : 'eloppeurs'
                        }}`
                      : `${presentationTeam} student dev${
                          presentationTeam === 1 ? 'eloper' : 'elopers'
                        }`}
                  </span>
                </div>
                <div className="stats-calendar">
                  <img src={calendar} alt="" />
                  <span>{presentationDates}</span>
                </div>
              </div>
              <p>{presentationText}</p>
              <button
                defaultValue="button"
                onClick={(e) => handleResponsiveFlip(e)}
                className="project-button"
              >
                {french ? 'Allez voir' : 'Have a look'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
