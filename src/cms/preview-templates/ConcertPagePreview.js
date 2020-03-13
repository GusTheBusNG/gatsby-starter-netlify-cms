import React from 'react'
import PropTypes from 'prop-types';
import { ConcertPageTemplate } from '../../pages/concerts';

const ConcertPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (!data) return <div>Loading....</div>

  const {
    heading,
    concerts
  } = data;

  return <ConcertPageTemplate heading={heading} concerts={concerts} />;
}

ConcertPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,  
}

export default ConcertPagePreview;