import AboutMePill from './AboutMePill';
import './aboutMe.scss';
import { useContext } from 'react';
import Context from '../../Context';

const AboutMe = () => {
  const { french } = useContext(Context);
  const infos = [
    {
      typeFR: 'Australie',
      typeEN: 'AUSTRALIA',
      lenghtFR: '2 ans',
      lenghtEN: '2 years',
      detailsFR: [
        'Voyage en sac à dos durant 7 mois',
        'Educateur dans une crèche à Sydney durant 5 mois',
        "Responsable d'une boutique DIESEL à Sydney durant 6 mois",
      ],
      detailsEN: [
        'Backpacking for 7 months around Australia',
        'Educator in a Childcare Center in Sydney, NSW for 5 months',
        'DIESEL Store manager in Sydney, NSW for 6 months',
      ],
    },
    {
      typeFR: 'Etats-Unis',
      typeEN: 'USA',
      lenghtFR: '1 an',
      lenghtEN: '1 year',
      detailsFR: [
        '6 mois à Seattle, WA',
        '6 mois à San Francisco, CA',
        "Jeune Homme aupair m'occupant d'un enfant autiste et de ses deux jeunes frères",
      ],
      detailsEN: [
        '6 months in Seattle, WA',
        '6 months in San Francisco, CA',
        'Au Pair taking care of an autistic boy and his 2 younger brothers',
      ],
    },
    {
      typeFR: 'Sports',
      typeEN: 'Sports',
      lenghtFR: '',
      lenghtEN: '',
      detailsFR: [
        'Semi-Marathon de Seattle',
        'Spartan Race de Sydney',
        '2 fois médaillé des Championnats de France de Cyclisme sur piste',
      ],
      detailsEN: [
        'Seattle Half Marathon',
        'Sydney Spartan Race',
        'Track cycling national championships medalist',
      ],
    },
    {
      typeFR: 'Passe-temps',
      typeEN: 'Hobbies',
      lenghtFR: '',
      lenghtEN: '',
      detailsFR: ['Guitare basse', 'Fan de pop culture', 'Escalade en salle'],
      detailsEN: ['Bass player', 'Pop culture enthousiast', 'Bouldering'],
    },
  ];

  return (
    <div className="about-me">
      <div className="about-me-title">
        <h1>{french ? 'Quelques trucs sur moi' : 'Some stuff about myself'}</h1>
      </div>
      <div className="sections">
        {infos.map((e, index) => (
          <AboutMePill
            key={index}
            type={french ? e.typeFR : e.typeEN}
            length={french ? e.lenghtFR : e.lenghtEN}
            details={french ? e.detailsFR : e.detailsEN}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
