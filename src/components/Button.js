import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss';

export const Button = ({ onClick, children }) => (
  <button
    className="button"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button;
