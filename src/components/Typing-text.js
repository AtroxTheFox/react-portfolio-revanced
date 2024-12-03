import React, { Component } from 'react';
import Typed from 'typed.js';
import { typedStrings } from '../resumeData'; // Adjust the path as needed

class TypingText extends Component {
  componentDidMount() {
    const options = {
      strings: typedStrings,
      typeSpeed: 150,
      backSpeed: 60,
      loop: true
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed.js instance during cleanup
    this.typed.destroy();
  }

  render() {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        background: 'white', 
        padding: '50px',
        boxSizing: 'border-box',
        border: 'none'
      }}>
        <h1><span className="auto_type" ref={(el) => { this.el = el; }}></span></h1>
      </div>
    );
  }
}

export default TypingText;