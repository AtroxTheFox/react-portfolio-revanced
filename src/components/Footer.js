import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <a href="https://twitter.com/AtroxTheFox"><i className="fa fa-twitter"></i></a>
        <a href="https://www.instagram.com/atroxthefox/"><i className="fa fa-instagram"></i></a>
        <a href="https://t.me/AtroxTheFox"><i className="fa fa-telegram"></i></a>
        <a href="mailto:atroxthefox@gmail.com"><i className="fa-regular fa-envelope"></i></a>
      </div>
      <div className="footer-right2">
        <a href="https://ko-fi.com/atroxthefox" target="_blank" rel="noopener noreferrer">
          <img src="../images/kofi_logo.png" alt="Ko-fi_logo" style={{width: '90px', height: '35px'}} />
        </a>
      </div>
      <div className="footer-left">
        <p className="footer-links">
        <p>Atrox's Photography &copy; 2024</p>
        </p>
      </div>
    </footer>
  );
}

export default Footer;