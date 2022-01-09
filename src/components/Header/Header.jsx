import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <ul className="menu">
            <li><Link className="nav-link" to="/welcome">Home</Link></li>
            <li><Link className="nav-link" to="/mytech">My Tech</Link></li>
            <li><Link className="nav-link" to="/myprojects">My Projects</Link></li>
            <li><Link className="nav-link" to="/aboutme">About Me</Link></li>
            </ul>
        </div>
    )
};

export default Header;