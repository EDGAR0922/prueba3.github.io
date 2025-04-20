
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import portfolioData from './Data/info'; // Asegúrate de que importes correctamente

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleSelectPerson = (person) => {
    setSelectedPerson(person); // Establece la persona seleccionada
  };

  return (
    <div className="App">
      <NavBar onSelectPerson={handleSelectPerson} />
      <Banner person={selectedPerson} />
      {selectedPerson && <Skills person={selectedPerson} />}  {/* Solo muestra Skills si hay una persona seleccionada */}
      {selectedPerson && <Projects person={selectedPerson} />}  {/* Solo muestra Projects si hay una persona seleccionada */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
