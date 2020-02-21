import React from 'react'
import PropTypes from 'prop-types'

import './FloatingCard.scss';

export const FloatingCard = ({ image, header, content, children, className }) => (
  <div className={`floating-card ${className}`}>
    { !!image &&
      <img
        alt="icon"
        className="floating-card__image"
        src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
      />
    }
    <h3 className="floating-card__heading">{header}</h3>
    <p className="floating-card__content">{content}</p>
    <div className="floating-card__children">
      {children}
    </div>
  </div>
);

FloatingCard.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default FloatingCard;
