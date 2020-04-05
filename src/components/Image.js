import React from 'react';
import PropTypes from 'prop-types'

const findImageSrc = image => {
  let imageSrc = image;

  if (!!image.childImageSharp) imageSrc = image.childImageSharp.fluid.src;
  else if (!!image.publicURL) imageSrc = image.publicURL;

  return imageSrc
}

const Image = ({ image, alt, ...props }) => !!image && (
  <img
    alt={alt}
    src={findImageSrc(image)}
    {...props}
  />
);

Image.propsType = {
  image: PropTypes.oneOf([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  alt: PropTypes.string.isRequired
}

export const BackgroundImageDiv = ({ image, children, ...props }) => (
  <div
    style={{
      backgroundImage: `url(${findImageSrc(image)})`
    }}
    {...props}
  >
    {children}
  </div>
)

export default Image;