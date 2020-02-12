import React from 'react'
import PropTypes from 'prop-types'

import './Header.scss';

export const Header = ({
  topText,
  bottomText
}) => (
  <div className="header">
    <h2 className="header__top-text">{topText}</h2>
    <h1 className="header__bottom-text">{bottomText}</h1>
    <div className="header__bar" />
  </div>
);

Header.propTypes = {
  buttonText: PropTypes.string,
  subheadingTwo: PropTypes.string,
}

export default Header;

