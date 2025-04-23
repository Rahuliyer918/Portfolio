import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Introduction from './components/Introduction';
import WorkEx from './components/WorkEx';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <ToastContainer />
      <Hero />
      <Introduction />
      <WorkEx />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
