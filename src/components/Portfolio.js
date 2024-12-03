import React, { Component } from 'react';
import resumeData from '../resumeData.js';
import $ from 'jquery';
import 'magnific-popup';

export default class Portfolio extends Component {
  componentDidMount() {
    $('.portfolio-items').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }

  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>My Latest Galleries</h1>
            {resumeData.portfolio && resumeData.portfolio.map((category, index) => (
              <div key={index} className="portfolio-category">
                <h2>
                  <a href={category.url} target="_blank" rel="noopener noreferrer">
                    {category.category}
                  </a>
                </h2>
                <div className="portfolio-items">
                  {category.projects.map((item, projectIndex) => (
                    <div key={projectIndex} className="portfolio-item">
                      <div className="item-wrap">
                        <a href={encodeURI(item.imgurl)} title={item.name}>
                          <img src={item.imgurl} className="item-img" alt={item.name} />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}