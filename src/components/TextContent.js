import React from 'react'
import PropTypes from 'prop-types'

import './TextContent.scss';
import Subheading from './Subheading';

export const TextContent = ({
  header,
  content
}) => (
  <div className="text-content">
    <Subheading>{header}</Subheading>
    <div className="text-content__content" dangerouslySetInnerHTML={{ __html: content }}></div>
  </div>
);

TextContent.propTypes = {
  header: PropTypes.string,
  content: PropTypes.object,
}

export default TextContent;
