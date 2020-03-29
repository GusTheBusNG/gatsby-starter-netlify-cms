import React from 'react'
import logo from '../../static/img/vocal-arts-logo-full-color.svg'

import './Footer.scss'

const Footer = class extends React.Component {
  getYear() {
    return new Date().getFullYear();
  }
  
  render() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <img
            src={logo}
            alt="Clemson Vocal Arts logo"
            style={{ width: '15rem', height: 'auto' }}
          />
          <p className="footer__content__copy-text">Clemson University Vocal Arts &copy; {this.getYear()}</p>
        </div>
      </footer>
    )
  }
}

export default Footer
