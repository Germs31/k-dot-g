import React from 'react';
import './scss/App.scss';

import Burger from './components/Burger';
import About from './components/About';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Resume from './components/Resume';

const App = () => {
  const open = () => {
    console.log('hello')
  }
  return (
    <div className="App">
      <Burger open={open} />

      <About />
      <Resume />
      <Faq />
      <Contact />
    </div>
  );
}

export default App;
