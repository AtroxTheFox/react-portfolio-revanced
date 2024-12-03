import React, { Component } from 'react';
import { faqData } from '../resumeData.js';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { question, answer } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <button className="accordion" onClick={this.toggleOpen}><b>{question}</b></button>
        {isOpen && <div className="panel"><p>{answer}</p></div>}
      </div>
    );
  }
}


class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <div className="row education">
  <div className="three columns header-col">
    <h1><span>Terms of Service</span></h1>
  </div>
  <div className="nine columns main-col">
    <div className="row item">
      <h3 style={{color: 'red', textAlign: 'center'}}>By commissioning me, you agree upon these Terms of Service:</h3>
      <ul>
        <li>Try to be as clear as possible about what you want. We can discuss details, place of shooting and other.</li>
      </ul>
    </div>
    <div className="row item">
      <h3>Payment and additional costs:</h3>
      <ul>
        <li>Before you pay, you will get a watermarked preview of the photos. After your confirmation, you will pay for the commission.</li>
        <li>The payment can be done via PayPal or bank transfer.</li>
        <li>Editing of the photos is already included in the price.</li>
        <li>You, as a customer, are accountable for any additional costs regarding the photoshoot – entrance fees, travel expenses, etc.</li>
      </ul>
    </div>
    <div className="row item">
      <h3>Cancellation:</h3>
      <ul>
        <li>I reserve a right to refuse any commission even without any reason.</li>
        <li>I reserve a right to cancel the photoshoot. You have the right to settle on reschedule. If not, in case it was already paid, you will get a refund within 14 days after you were informed of the cancellation.</li>
        <li>If you, as customer, cancel or reschedule the photoshoot, you have to do it with adequate advance – at least 3 days in advance. In other case, you’re not eligible for refund!</li>
      </ul>
    </div>
    <div className="row item">
      <h3>Delivery:</h3>
      <ul>
        <li>I'll deliver my photos within 14 days of the photoshoot via Google Drive</li>
        <li>Unedited (RAW) photos are stored for 1 month after the photoshoot.</li>
        <li>If you want to claim a complaint, you have to do it within that 1-month period.</li>
      </ul>
    </div>
    <div className="row item">
      <h3>Final provisions:</h3>
      <ul>
        <li>You grant me right to use photos for all purposes (self-propagation, posts on social media, monthly subscriptions etc.)</li>
        <li>Photos can’t be used for commercial use or any other propagation of 3rd party without my consent.</li>
      </ul>
    </div>
  </div>
</div>

<div className="row education">
  <div className="three columns header-col">
    <h1><span>Pricing</span></h1>
  </div>
  <div className="nine columns main-col">
    <h2 style={{fontSize: '1.5em'}}> 500CZK for one suiter for one hour; each additional suiter 100CZK.
    So the list goes like this:</h2>
    <div className="row item">
      <table style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Package</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Hour</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>500 CZK</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 hour of photography with 1 suiter</td>
          </tr>
        <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 Hours</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1000 CZK</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 hours of photography with 1 suiter</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 Hours</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1500 CZK</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 hours of photography with 1 suiter</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Hour (2 Suiters)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>600 CZK</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 hour of photography with 2 suiters</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 Hour (2 Suiters)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1200 CZK</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 hours of photography with 2 suiters</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 Hours (2 Suiters)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1800 CZK</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 hours of photography with 2 suiters</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Hours (3 Suiters)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>700 CZK</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 hour of photography with 3 suiters</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 Hours (3 Suiters)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1400 CZK</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 hours of photography with 3 suiters</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 Hours (3 Suiters)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2100 CZK</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 hours of photography with 3 suiters</td>
    </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rush Editing</td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>+20%</td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>+20% of your initial price; Get your edited photos within 48 hours!</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>

         

<div className="row skill">
          <div className="three columns header-col">
            <h1><span>FAQ</span></h1>
          </div>
          <div className="nine columns main-col faq-container">
            {faqData.map((faq, index) => (
              <Accordion key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
        {/* Your existing code here... */}
      </section>
    );
  }
}

export default Resume;