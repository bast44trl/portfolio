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
import LogoCard from './LogoCard';

const Tech = () => {
    const logos = [
        {   
            techText: "HTML5 is a markup language used for structuring and presenting content on the World Wide Web.", techName: "HTML5", logo: logoHtml, link: "https://html.spec.whatwg.org/multipage/"},{
            techText: "Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language.", techName: "CSS3", logo: logoCss, link: "https://developer.mozilla.org/fr/docs/Web/CSS"},{
            techText: "Express is a back end web application framework for Node.js, designed for building web applications and APIs.", techName: "Express", logo: logoExpress, link: "https://expressjs.com/"},{
            techText: "Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications.", techName: "Figma", logo: logoFigma, link: "https://www.figma.com/"},{
            techText: "GitHub is a provider of Internet hosting for software development and version control using Git.", techName: "GitHub", logo: logoGit, link: "https://github.com/"},{
            techText: "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.", techName: "Javascript", logo: logoJs, link: "https://www.javascript.com/"},{
            techText: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.", techName: "NodeJS", logo: logoNode, link: "https://nodejs.org/"},{
            techText: "Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle so you can create better APIs—faster.", techName: "Postman", logo: logoPostman, link: "https://www.postman.com/"},{
            techText: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components.", techName: "ReactJS", logo: logoReact, link: "https://reactjs.org/"},{
            techText: "MySQL (Structured Query Language) is an open-source relational database management system (RDBMS)", techName: "MySql", logo: logoSql, link: "https://www.mysql.com/"},{
            techText: "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.", techName: "Visual Studio Code", logo: logoVsCode, link: "https://code.visualstudio.com/"
        }
    ];

    return (
        <div className="tech">
            <video className="tech-video" autoPlay loop muted>
                <source src={techVideo} type='video/mp4'/>
            </video>
            <div className="overlay">
                <div className="tech-content">
                    <h1>Here are technologies I use</h1>
                    <div className="all-tech-container">
                            {logos.map((logo, index) => <LogoCard className="logo-card" key={index} index={index} logo={logo.logo} techName={logo.techName} techText={logo.techText} link={logo.link} />)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Tech;
