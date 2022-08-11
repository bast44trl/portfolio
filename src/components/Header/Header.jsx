import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import frenchImg from '../../assets/theme&backgrounds/frenchImg.webp';
import englishImg from '../../assets/theme&backgrounds/englishImg.webp';
import Context from '../../Context';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const { french, setFrench } = useContext(Context);
  return (
    <div className="header">
      <BurgerMenu />
      <ul className="menu">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : 'nav-link')}
            to="/welcome"
          >
            {french ? 'Acceuil' : 'Home'}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : 'nav-link')}
            to="/mytech"
          >
            {french ? 'Mes tech' : 'My Tech'}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : 'nav-link')}
            to="/myprojects"
          >
            {french ? 'Mes projets' : 'My Projects'}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : 'nav-link')}
            to="/aboutme"
          >
            {french ? 'A propos de moi' : 'About Me'}
          </NavLink>
        </li>
        <li className="li-languages">
          <div className="flags-container">
            <div onClick={() => setFrench(true)} className="french">
              <img src={frenchImg} alt="french" />
            </div>
            <div onClick={() => setFrench(false)} className="english">
              <img src={englishImg} alt="english" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
