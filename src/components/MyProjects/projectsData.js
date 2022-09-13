import lbm from '../../assets/projets/svg/lbm.svg';
import dobby from '../../assets/projets/dobby.webp';
import llm from '../../assets/projets/svg/llm.svg';
import monCarnet from '../../assets/projets/svg/logoMonCarnet.svg';

import logoExpress from '../../assets/logo/svg/express.svg';
import logoHtml5 from '../../assets/logo/svg/html5.svg';
import logoCss3 from '../../assets/logo/svg/css3.svg';
import logoJavascript from '../../assets/logo/svg/javascript.svg';
import logoTypescript from '../../assets/logo/svg/typescript.svg';
import logoFigma from '../../assets/logo/svg/figma.svg';
import logoGit from '../../assets/logo/svg/github.svg';
import logoNode from '../../assets/logo/svg/nodejs.svg';
import logoPostman from '../../assets/logo/svg/postman.svg';
import logoReact from '../../assets/logo/svg/react.svg';
import logoSql from '../../assets/logo/svg/mysql.svg';
import logoVsCode from '../../assets/logo/svg/vs-code.svg';
import logoSass from '../../assets/logo/svg/sass.svg';
import logoTailwind from '../../assets/logo/svg/tailwind.svg';
import logoPrisma from '../../assets/logo/svg/prisma.svg';

export const projects = [
  {
    link: 'https://bast44trl.github.io/laBelleMiche/',
    title: 'La Belle Miche',
    image: lbm,
    techs: [logoHtml5, logoCss3, logoJavascript, logoGit, logoVsCode],
    presentation: {
      team: 4,
      durationFR: '4 semaines',
      durationEN: '4 weeks',
      datesFR: 'Sept - Oct 2021',
      datesEN: 'Sept - Oct 2021',
      textFR:
        "Le premier projet, quelques jours après mon entrée en formation à la Wild Code School, réalisé avec un brin d'humour, nous ayant surtout permit de prendre en main des outils tels que Git et GitHub, ainsi que l'utilisation de Flex et Grid en CSS",
      textEN:
        'My very first project, just few days after I started my training at Wild Code School. Realised with a tiny bit of humor, it allowed us to get used to Git and GitHub, but also made us use Flex and Grid on CSS',
    },
  },
  {
    link: 'https://github.com/bast44trl/moncarnet-frontend',
    title: 'Mon Carnet',
    className: 'moncarnet',
    image: monCarnet,
    techs: [
      logoTypescript,
      logoReact,
      logoTailwind,
      logoSql,
      logoPrisma,
      logoPostman,
      logoGit,
      logoVsCode,
    ],
    presentation: {
      team: 3,
      durationFR: '8 semaines',
      durationEN: '8 weeks',
      datesFR: 'Déc - Jan 2022',
      datesEN: 'Dec - Jan 2022',
      textFR:
        "Le 3ème projet de la formation, réalisé avec des stacks imposées telles que Prisma ou TailwindCSS, et qui consiste en la création d'un carnet d'entretien de véhicule numérique",
      textEN:
        'Third training project, made with imposed tech such as Prisma or TailWindCSS, and consisting in the creation of a digital vehicule maintenance book',
    },
  },
  {
    link: 'https://bast44trl.github.io/DobbyAndFriends/#/',
    title: 'Dobby And Friends',
    image: dobby,
    techs: [logoReact, logoCss3, logoFigma, logoGit, logoVsCode],
    presentation: {
      team: 4,
      durationFR: '5 semaines',
      durationEN: '5 weeks',
      datesFR: 'Nov - Dec 2021',
      datesEN: 'Nov - Dec 2021',
      textFR:
        "Second projet lors de ma formation à la Wild Code School, il consistait à nous apprendre l'utilisation et la manipulation d'une API. Notre projet se base sur l'univers d'Harry Potter",
      textEN:
        'Second project during my training at Wild Code School, we learned how to use and manipulate an API. Our project is based on the universe of Harry Potter',
    },
  },
  {
    link: 'https://bast44trl.github.io/LLM_WikiMusic',
    title: 'Live Love Music',
    image: llm,
    techs: [logoReact, logoFigma, logoGit, logoVsCode],
    presentation: {
      team: 6,
      durationFR: '31 heures',
      durationEN: '31 hours',
      datesFR: 'Nov 2021',
      datesEN: 'Nov 2021',
      textFR:
        "Notre premier projet Hackaton lors de ma formation à la Wild Code School dont le thème donné le matin même était 'La musique'. Notre idée fut de créer un site permettant d'améliorer sa culture musicale",
      textEN:
        "Our first Hackaton project during my training at Wild Code School. Theme given in the morning was 'Music'. Our idea was to create a website to improve its musical knowledge",
    },
    /* warning: "https://cors-anywhere.herokuapp.com/corsdemo", */
  },
];
