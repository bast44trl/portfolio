import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <ul className="menu">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/tech">Tech</Link></li>
            <li><Link className="nav-link" to="/aboutme">About Me</Link></li>
            </ul>
        </div>
    )
};

export default Header;