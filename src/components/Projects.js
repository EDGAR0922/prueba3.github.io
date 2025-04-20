import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../styles/Projects.css';

// Proyectos de muestra, o podrías importar desde info.js si están ahí
const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción del Proyecto 1",
    image: projImg1,
  },
  {
    title: "Proyecto 2",
    description: "Descripción del Proyecto 2",
    image: projImg1,
  },
  {
    title: "Proyecto 3",
    description: "Descripción del Proyecto 3",
    image: projImg1,
  },
];

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Proyectos</h2>
                  <p>Estos son algunos de los proyectos realizados por nuestro equipo. Reflejan experiencia en diseño y desarrollo de aplicaciones modernas.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" />
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.image}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="fondo" />
    </section>
  );
};
