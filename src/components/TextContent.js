import React from 'react'
import PropTypes from 'prop-types'

import './TextContent.scss';

export const TextContent = ({
  header,
  content
}) => (
  <div className="text-content">
    <h2 className="text-content__heading">{header}</h2>
    <h1 className="text-content__content">{content}</h1>
  </div>
);

TextContent.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
}

export default TextContent;
