import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import frenchImg from '../../assets/theme&backgrounds/frenchImg.webp';
import englishImg from '../../assets/theme&backgrounds/englishImg.webp';
import Context from '../../Context';
import { BackgroundsContainerMobile } from '../ThemeAndBackground/ThemeAndBackground';

const BurgerMenu = () => {
  const { french, setFrench, checked, handleCheck, burgerMenuBackground } =
    useContext(Context);

  return (
    <div className="navigation">
      <input
        type="checkbox"
        checked={checked}
        readOnly
        className="navigation__checkbox"
        id="navi-toggle"
        onClick={handleCheck}
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div
        className="navigation__background"
        style={{ backgroundImage: burgerMenuBackground }}
      >
        &nbsp;
      </div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink
              onClick={handleCheck}
              className={({ isActive }) =>
                isActive ? 'navigation__link__active' : 'navigation__link'
              }
              to="/welcome"
            >
              {french ? 'Acceuil' : 'Home'}
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              onClick={handleCheck}
              className={({ isActive }) =>
                isActive ? 'navigation__link__active' : 'navigation__link'
              }
              to="/mytech"
            >
              {french ? 'Mes tech' : 'My Tech'}
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              onClick={handleCheck}
              className={({ isActive }) =>
                isActive ? 'navigation__link__active' : 'navigation__link'
              }
              to="/myprojects"
            >
              {french ? 'Mes projets' : 'My Projects'}
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              onClick={handleCheck}
              className={({ isActive }) =>
                isActive ? 'navigation__link__active' : 'navigation__link'
              }
              to="/aboutme"
            >
              {french ? 'A propos de moi' : 'About Me'}
            </NavLink>
          </li>
          <li className="navigation__item">
            <div className="navigation__flags-container">
              <div
                onClick={() => {
                  setFrench(true);
                  handleCheck();
                }}
                className="navigation__flags-container__french"
              >
                <img src={frenchImg} alt="french" />
              </div>
              <div
                onClick={() => {
                  setFrench(false);
                  handleCheck();
                }}
                className="navigation__flags-container__english"
              >
                <img src={englishImg} alt="english" />
              </div>
            </div>
          </li>
          <li className="navigation__item">
            <div className="navigation__flags-container">
              <BackgroundsContainerMobile />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
