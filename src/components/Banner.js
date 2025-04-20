// Banner.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle, Search } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = ({ person }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['del Grupo C'];
  const period = 2000;
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const matchSearch = (text) => {
    if (!person) return false;
    const { name, tagline, description } = person.info;
    const lowerSearch = searchTerm.toLowerCase();
    return (
      name.toLowerCase().includes(lowerSearch) ||
      tagline.toLowerCase().includes(lowerSearch) ||
      description.toLowerCase().includes(lowerSearch)
    );
  };

  const showDefaultContent = !searchTerm || matchSearch(searchTerm);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  {/* Barra de búsqueda */}
                  <div style={{
                    position: 'relative',
                    marginTop: '16px',
                    marginBottom: '16px',
                    maxWidth: '400px',
                    width: '100%',
                  }}>
                    <Search
                      size={18}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '12px',
                        transform: 'translateY(-50%)',
                        color: '#aaa',
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Buscar..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{
                        padding: '8px 12px 8px 36px',
                        borderRadius: '20px',
                        border: '1px solid #ccc',
                        width: '100%',
                      }}
                    />
                  </div>

                  {/* Mostrar solo la persona seleccionada o el grupo si no hay búsqueda */}
                  {showDefaultContent ? (
                    person ? (
                      <>
                        <h1>
                          ¡Hola! Soy {person.info.name}{' '}
                          <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "del Grupo C" ]'>
                            <span className="wrap">{text}</span>
                          </span>
                        </h1>
                        <h2>{person.info.tagline}</h2>
                        <p>{person.info.description}</p>
                      </>
                    ) : (
                      <>
                        <span className="tagline">
                          Grupo C - Innovando en la programación, unidos por el avance tecnológico.
                        </span>
                        <h1>Información</h1>
                        <p>
                          Somos el Grupo C, un equipo comprometido con la innovación tecnológica y el avance continuo
                          en el desarrollo de software. Nos enfocamos en crear soluciones modernas, escalables y
                          eficientes para afrontar los desafíos tecnológicos actuales.
                        </p>
                      </>
                    )
                  ) : (
                    <p>No se encontraron resultados para "{searchTerm}".</p>
                  )}

                  <button onClick={() => console.log('connect')}>
                    Conectemos <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

