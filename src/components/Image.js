import React from 'react';
import PropTypes from 'prop-types'

const findImageSrc = image => {
  if (!image) return image
  if (!!image.childImageSharp) return image.childImageSharp.fluid.src;
  if (!!image.publicURL) return image.publicURL;

  return image;
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