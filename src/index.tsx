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
import { SOCIAL_MEDIA_PROFILES, WORK_EXPERIENCES } from './util/constants';

ReactDOM.render(
  <React.StrictMode>
    <noscript>You need to enable JavaScript to run this website.</noscript>
    <Header Profiles={SOCIAL_MEDIA_PROFILES.Profiles} />
    <div className="page-content">
      <div className="container">
        <div className="cover shadow-lg bg-white">
          <Cover />
          <About Experiences={WORK_EXPERIENCES.Experiences} />
          <Separator />
          <Skills />
          <Separator />
          <Experience Experiences={WORK_EXPERIENCES.Experiences} />
          <Separator />
          <div className="page-break"></div>
          <Education />
          <Separator />
          <Contact />
        </div>
      </div>
    </div>
    <Footer Profiles={SOCIAL_MEDIA_PROFILES.Profiles} />
  </React.StrictMode>,
  document.body
);