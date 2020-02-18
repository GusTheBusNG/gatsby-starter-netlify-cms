import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby';

import './SocialMediaLine.scss';

export const SocialMediaLine = ({ socialMedia, className }) => (
  <div className={`social-media-line ${className}`}>
    {
      socialMedia.map(({ icon, link }) => (
        <Link to={link}>
          <img
            alt="Social Media Icon"
            className="social-media-line__icon"
            src={!!icon.childImageSharp ? icon.childImageSharp.fluid.src : icon}
          />
        </Link>
      ))
    }
  </div>
);

SocialMediaLine.propTypes = {
  socialMedia: PropTypes.array.isRequired
}

export default SocialMediaLine;
