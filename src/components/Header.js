import React, { useEffect } from 'react';
import Typed from 'typed.js';
import resumeData from '../resumeData'; // Adjust the path if necessary

const Header = () => {
  useEffect(() => {
    const options = {
      strings: resumeData.typedStrings,
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed('.typed-element', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header id="home">
      <nav id="nav-wrap" style={{ backgroundColor: '#2b2b2b' }}>
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
        <ul id="nav" className="nav">
          <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
          <li><a className="smoothscroll" href="#portfolio">Gallery</a></li>
          <li><a className="smoothscroll" href="#resume">ToS & Price</a></li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">{resumeData.name}</h1>
          <h3>
            <span className="typed-element typed-text"></span>
          </h3>
          <hr />
          <ul className="social">
            {resumeData.socialLinks &&
              resumeData.socialLinks.map((item) => {
                return (
                  <li key={item.name}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <i className={item.className}></i>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;