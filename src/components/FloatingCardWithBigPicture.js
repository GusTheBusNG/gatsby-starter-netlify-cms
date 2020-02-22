import React from 'react'
import PropTypes from 'prop-types'

import FloatingCard from './FloatingCard';
import Button from './Button';

import './FloatingCardWithBigPicture.scss'

export const FloatingCardWithBigPicture = ({
  image,
  heading,
  description,
  button: { buttonLink, buttonText }
}) => (
  <div className="floating-card-with-big-picture">
    <img
      className="big-picture"
      src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
      alt="Ensemble"
    />
    <FloatingCard
      className="description-card"
      header={heading}
      content={description}
    >
      <Button link={buttonLink}>
        {buttonText}
      </Button>
    </FloatingCard>
  </div>
);

FloatingCardWithBigPicture.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired
  })
}

export default FloatingCardWithBigPicture;
