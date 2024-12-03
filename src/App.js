import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import Portfolio from './components/Portfolio'; // 
import 'magnific-popup/dist/magnific-popup.css';
import 'magnific-popup/dist/jquery.magnific-popup.min.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>        
        <Portfolio resumeData={resumeData}/> 
        <Resume resumeData={resumeData}/>
       
        
      </div>
    );
  }
}

export default App;