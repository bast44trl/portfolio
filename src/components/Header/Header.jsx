import { Link } from 'react-router-dom';
import frenchImg from '../../assets/theme&backgrounds/frenchImg.png';
import englishImg from '../../assets/theme&backgrounds/englishImg.png';
import { useContext } from 'react';
import Context from '../../Context';

const Header = () => {
  const { french, setFrench } = useContext(Context);
  return (
    <div className="header">
      <ul className="menu">
        <li>
          <Link className="nav-link" to="/welcome">
            {french ? 'Acceuil' : 'Home'}
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/mytech">
            {french ? 'Mes tech' : 'My Tech'}
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/myprojects">
            {french ? 'Mes projets' : 'My Projects'}
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/aboutme">
            {french ? 'A propos de moi' : 'About Me'}
          </Link>
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
