import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Articles from './Contact.js'; 
import About from './About.js'; 
import './App.css';

import Gallery from 'react-grid-gallery';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

          <Route exact path="/" component={Projects} />
          <Route path="/contact" component={Articles} />
          <Route path="/about" component={About} />

        <div className="navigation">
          <div className="navigation-sub">

            <Link to="/" className="item">Projects</Link>
            <Link to="/contact" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>

            <Gallery images={IMAGES} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

export default App;