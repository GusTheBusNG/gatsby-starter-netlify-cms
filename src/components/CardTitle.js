import React from 'react'
import PropTypes from 'prop-types'

import './CardTitle.scss';

const CardTitle = ({ subtitle, title, className }) => (
  <div className={`card-title ${className}`}>
    <p className="card-title__subtitle">{subtitle}</p>
    <h2 className="card-title__title">{title}</h2>
  </div>
);

CardTitle.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string
}

export default CardTitle;