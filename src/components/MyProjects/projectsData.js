import lbm from '../../assets/projets/svg/lbm.svg';
import dobby from '../../assets/projets/dobby.jpg';
import llm from '../../assets/projets/svg/llm.svg';

import logoExpress from '../../assets/logo/svg/express.svg';
import logoFigma from '../../assets/logo/svg/figma.svg';
import logoGit from '../../assets/logo/svg/github.svg';
import logoNode from '../../assets/logo/svg/nodejs.svg';
import logoPostman from '../../assets/logo/svg/postman.svg';
import logoReact from '../../assets/logo/svg/react.svg';
import logoSql from '../../assets/logo/svg/mysql.svg';
import logoVsCode from '../../assets/logo/svg/vs-code.svg';
import logoSass from '../../assets/logo/svg/sass.svg';
import logoTailwind from '../../assets/logo/svg/tailwind.svg';

export const projects = [
  {
    link: 'https://bast44trl.github.io/laBelleMiche/',
    title: 'La Belle Miche',
    image: lbm,
    techs: [logoReact, logoGit, logoVsCode],
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
    link: 'https://bast44trl.github.io/DobbyAndFriends/#/',
    title: 'Dobby And Friends',
    image: dobby,
    techs: [logoReact, logoFigma, logoGit, logoVsCode],
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
