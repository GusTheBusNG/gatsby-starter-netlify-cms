import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height'
import PropTypes from 'prop-types'

import './FloatingCard.scss'

const FloatingCard = ({ image, header, content, drawer, children, className }) => {
  const [height, setHeight] = useState(0)
  
  return (
  <>
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
      { !!drawer &&
        <button 
          onClick={() => setHeight(height === 0 ? 'auto' : 0)} 
          className={`floating-card__expand ${height === 'auto' ? 'expanded' : 'collapsed'}`} />
      }
      { !!children &&
        <div className="floating-card__children">
          {children}
        </div>
      } 
    </div>
    { !!drawer &&
      <AnimateHeight 
        duration={200}
        height={height}
        className={`drawer  ${height === 'auto' ? 'expanded' : 'collapsed'}`}>
          <p className="drawer__text">{drawer}</p>
      </AnimateHeight>
    
    }
  </>
)};

FloatingCard.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default FloatingCard;
