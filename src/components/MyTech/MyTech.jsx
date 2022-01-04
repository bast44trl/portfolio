import './myTech.scss';
import techVideo from '../../assets/techVideo.mp4';
import logoCss from '../../assets/logo/css.png';
import logoHtml from '../../assets/logo/html.png';
import logoExpress from '../../assets/logo/express.png';
import logoFigma from '../../assets/logo/figma.png';
import logoGit from '../../assets/logo/git.png';
import logoJs from '../../assets/logo/js.png';
import logoNode from '../../assets/logo/node.png';
import logoPostman from '../../assets/logo/postman.png';
import logoReact from '../../assets/logo/react.png';
import logoSql from '../../assets/logo/sql.png';
import logoVsCode from '../../assets/logo/vscode.png';

const Tech = () => {
    const logos = [logoCss, logoHtml, logoExpress, logoFigma, logoGit, logoJs, logoNode, logoPostman, logoReact, logoSql, logoVsCode]; 
    return (
        <div className="tech">
            <video className="tech-video" autoPlay loop muted>
                <source src={techVideo} type='video/mp4'/>
            </video>
            <div className="overlay"></div>
            <div className="tech-content">
                <h1>Here are technologies I use</h1>
                <div className="tech-container">
                    <div className="all-tech-container">
                        {logos.map((logo, index) => <img src={logo} alt="" key={index} />)}
                    </div>
                    <div className="tech-carousel"></div>
                </div>
            </div>
        </div>
    )
};

export default Tech;
