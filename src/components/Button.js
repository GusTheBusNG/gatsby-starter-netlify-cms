import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss';
import { Link } from 'gatsby';

export const Button = ({ link, children = 'Button Label' }) => !!link && (
  <Link to={link}>
    <button
      className="button"
    >
      {children}
    </button>
  </Link>
);

Button.propTypes = {
  link: PropTypes.string.isRequired
}

export default Button;
