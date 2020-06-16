import React from 'react';
import './scss/App.scss';

import Burger from './components/BurgerNav';
import About from './components/About';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Landing from './components/Landing';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Burger />

      <Landing />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
