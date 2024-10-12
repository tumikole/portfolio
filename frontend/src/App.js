import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import './Components/styles/App.scss';
import PersonalProjects from './Components/PersonalProjects';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <PersonalProjects />
      <Contact />
    </div>
  );
}

export default App;
