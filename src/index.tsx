import React from 'react';
import ReactDOM from 'react-dom';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Cover } from './components/Cover';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Separator } from './components/Separator';
import { Skills } from './components/Skills';

ReactDOM.render(
  <React.StrictMode>
    <noscript>You need to enable JavaScript to run this website.</noscript>
    <Header />
    <div className="page-content">
      <div className="container">
        <div className="cover shadow-lg bg-white">
          <Cover />
          <About />
          <Separator />
          <Skills />
          <Separator />
          <Experience />
          <Separator />
          <div className="page-break"></div>
          <Education />
          <Separator />
          <Contact />
        </div>
      </div>
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('top')
);