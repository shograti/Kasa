import React from 'react';
import Hero from '../components/Hero';
import heroImage from '../assets/hero-about-bg.png';
import Accordion from '../components/Accordion';

function About() {
  return (
    <>
      <Hero image={heroImage} />
      <div className="about_accordion_container">
        <Accordion
          title="Fiabilité"
          data={[
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
          ]}
        />
        <Accordion
          title="Respect"
          data={[
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
          ]}
        />
        <Accordion
          title="Service"
          data={[
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
          ]}
        />
        <Accordion
          title="Sécurité"
          data={[
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
          ]}
        />
      </div>
    </>
  );
}

export default About;
