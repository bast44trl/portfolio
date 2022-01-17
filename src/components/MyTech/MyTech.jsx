import './myTech.scss';
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
import { useContext } from 'react';
import Context from '../../Context';

const Tech = () => {
    const logos = [
        {   
            techTextFrench: "Le HyperText Markup Language, généralement abrégé HTML ou, dans sa dernière version, HTML5, est le langage de balisage conçu pour représenter les pages web.",
            techTextEnglish: "HTML5 is a markup language used for structuring and presenting content on the World Wide Web.", techName: "HTML5", logo: logoHtml, link: "https://html.spec.whatwg.org/multipage/"},{
            techTextFrench: "Les feuilles de style en cascade, généralement appelées CSS, forment un langage informatique qui décrit la présentation des documents HTML et XML.",
            techTextEnglish: "Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language.", techName: "CSS3", logo: logoCss, link: "https://developer.mozilla.org/fr/docs/Web/CSS"},{
            techTextFrench: "Express.js est un framework pour construire des applications web basées sur Node.js.",
            techTextEnglish: "Express is a back end web application framework for Node.js, designed for building web applications and APIs.", techName: "Express", logo: logoExpress, link: "https://expressjs.com/"},{
            techTextFrench: "Figma est un éditeur de graphiques vectoriels et un outil de prototypage.",
            techTextEnglish: "Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications.", techName: "Figma", logo: logoFigma, link: "https://www.figma.com/"},{
            techTextFrench: "GitHub est un service web d'hébergement et de gestion de développement de logiciels, utilisant le logiciel de gestion de versions Git.",
            techTextEnglish: "GitHub is a provider of Internet hosting for software development and version control using Git.", techName: "GitHub", logo: logoGit, link: "https://github.com/"},{
            techTextFrench: "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives.",
            techTextEnglish: "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.", techName: "Javascript", logo: logoJs, link: "https://www.javascript.com/"},{
            techTextFrench: "Node.js est un environnement bas niveau permettant l’exécution de JavaScript côté serveur.",
            techTextEnglish: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.", techName: "NodeJS", logo: logoNode, link: "https://nodejs.org/"},{
            techTextFrench: "Postman est une application permettant de construire et de tester des API.",
            techTextEnglish: "Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle so you can create better APIs—faster.", techName: "Postman", logo: logoPostman, link: "https://www.postman.com/"},{
            techTextFrench: "React.js est une bibliothèque JavaScript dont le but principal est de faciliter la création d'application web monopage, via la création de composants.",
            techTextEnglish: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components.", techName: "ReactJS", logo: logoReact, link: "https://reactjs.org/"},{
            techTextFrench: "MySQL est un système de gestion de bases de données relationnelles (SGBDR)",
            techTextEnglish: "MySQL (Structured Query Language) is an open-source relational database management system (RDBMS)", techName: "MySql", logo: logoSql, link: "https://www.mysql.com/"},{
            techTextFrench: "Visual Studio Code est un éditeur de code extensible développé par Microsoft pour Windows, Linux et macOS.",
            techTextEnglish: "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.", techName: "Visual Studio Code", logo: logoVsCode, link: "https://code.visualstudio.com/"
        }
    ];
    const { french } = useContext(Context);

    return (
            <div className="overlay">
                <div className="tech-content">
                    <h1 className={french ? "french-tech-title" : "english-tech-title"}>{french ? "Mes languages et technologies" : "Here are technologies I use"}</h1>
                    <div className="all-tech-container">
                            {logos.map((logo, index) => <LogoCard className="logo-card" key={index} index={index} logo={logo.logo} techName={logo.techName} techText={french ? logo.techTextFrench : logo.techTextEnglish} link={logo.link} />)}
                    </div>
                </div>
            </div>
    )
};

export default Tech;
