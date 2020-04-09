import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss';
import { Link } from 'gatsby';

export const Button = ({ data }) => {
  if (!data || !data.buttonLink) return <></>

  const button = (
    <button className="button">
      {data.buttonText}
    </button>
  );

  if (data.newTab) {
    return (
      <a href={data.buttonLink} target="_blank" rel="noopener noreferrer">
        {button}
      </a>
    );
  } else {
    return (
      <Link to={data.buttonLink}>
        {button}
      </Link>
    )
  }
}

Button.propTypes = {
  data: PropTypes.shape({
    buttonLink: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    newTab: PropTypes.bool
  })
}

export default Button;
