import React from 'react'
import PropTypes from 'prop-types'

import './FloatingCard.scss';

export const FloatingCard = ({ image, header, content }) => (
  <div className="floating-card">
    <img
      alt="icon"
      className="floating-card__image"
      src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
    />
    <h3 className="floating-card__heading">{header}</h3>
    <p className="floating-card__content">{content}</p>
  </div>
);

FloatingCard.propTypes = {
  image: PropTypes.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default FloatingCard;
