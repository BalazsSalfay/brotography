import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Portfolio from './Portfolio.js'; 
import Articles from './Contact.js'; 
import About from './About.js'; 
import './App.css';

import { IMAGES } from "./images.js";
import Gallery from 'react-grid-gallery';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

          <Route exact path="/" component={Portfolio} />
          <Route path="/contact" component={Articles} />
          <Route path="/about" component={About} />

        <div className="navigation">
          <div className="navigation-sub">

            <Link to="/" className="item">Portfolio</Link>
            <Link to="/contact" className="item">Contact</Link>
            <Link to="/about" className="item">About</Link>

            <Gallery images={IMAGES} rowHeight={280} margin={4} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
