import React from 'react';
import './scss/App.scss';

import Burger from './components/Burger';
import About from './components/About';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Resume from './components/Resume';
import Landing from './components/Landing'

const App = () => {
  return (
    <div className="App">
      <Burger />

      <Landing />
      <About />
      <Resume />
      <Faq />
      <Contact />
    </div>
  );
}

export default App;
