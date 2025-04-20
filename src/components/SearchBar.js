//Componente que muestra las habilidades del usuario, utilizando un carrusel para mostrar diferentes habilidades y tecnologías.

import React from 'react';
import meter1 from '../assets/img/meter1.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = ({ person }) => {
  if (!person || !person.skills || person.skills.length === 0) {
    return null;
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              <p>Estas son algunas de las principales habilidades y tecnologías que {person.info.name} domina en el ámbito del desarrollo backend y frontend.<br />Desde la gestión de servidores hasta el desarrollo de interfaces modernas y escalables.</p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                autoPlay={true} 
                autoPlaySpeed={2000} 
                className="owl-carousel owl-theme skill-slider"
              >
                {person.skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={meter1} alt={skill} />
                    <h5>{skill}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
