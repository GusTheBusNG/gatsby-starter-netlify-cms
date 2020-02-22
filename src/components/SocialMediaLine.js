import React from 'react'
import PropTypes from 'prop-types'

import './SocialMediaLine.scss';

export const SocialMediaLine = ({ socialMedia, className }) => (
  <div className={`social-media-line ${className}`}>
    {
      socialMedia.map(({ icon, link }) => (
        <a key={link} href={link}>
          <img
            alt="Social Media Icon"
            className="social-media-line__icon"
            src={!!icon.childImageSharp ? icon.childImageSharp.fluid.src : icon}
          />
        </a>
      ))
    }
  </div>
);

SocialMediaLine.propTypes = {
  socialMedia: PropTypes.array.isRequired
}

export default SocialMediaLine;
