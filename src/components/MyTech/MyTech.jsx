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
import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/arrow-right.png';
import { useEffect, useState } from 'react';

const Tech = () => {
    const logos = [logoCss, logoHtml, logoExpress, logoFigma, logoGit, logoJs, logoNode, logoPostman, logoReact, logoSql, logoVsCode];
    const [logoNb, setLogoNb] = useState(0); 
    const [slowAppear, setSlowAppear] = useState(false);
    const slowingAppear = () => {
        setSlowAppear(false);
    };
    const logoMoveLeft = () => {
        if (logoNb===0) {
            setLogoNb(logos.length-1);
        } else {
            setLogoNb(logoNb-1);
        };
    }
    const logoMoveRight = () => {
        if (logoNb===logos.length-1) {
            setLogoNb(0);
        } else {
            setLogoNb(logoNb+1);
        };
    }
    useEffect(() => {
        setSlowAppear(true);
        setTimeout(() => slowingAppear(), 500);
    }, [logoNb]);
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
                    <div className="big-logo-container">
                        <div className="arrow-left"><img src={logoNb===0?logos.length-1:logos[logoNb-1]} onClick={() => logoMoveLeft()} alt="" /></div>
                        <div className={slowAppear? "big-logo slow-appear" : "big-logo"}><img src={logos[logoNb]} alt="" /></div>
                        <div className="arrow-right"><img src={logoNb===logos.length-1?logos[0]:logos[logoNb+1]} onClick={() => logoMoveRight()} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Tech;
