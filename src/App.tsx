import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Introduction from './components/Introduction';
import WorkEx from './components/WorkEx';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App" >
      <Hero />
      <Introduction />
      <WorkEx />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
