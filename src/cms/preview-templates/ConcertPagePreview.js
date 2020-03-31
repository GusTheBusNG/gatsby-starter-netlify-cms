import React from 'react'
import PropTypes from 'prop-types';
import { ConcertsPageTemplate } from '../../templates/concerts-page';

const ConcertPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (!data) return <div>Loading....</div>

  const {
    concertsPageHeading: heading,
    concerts
  } = data;

  return <ConcertsPageTemplate heading={heading} concerts={concerts} />;
}

ConcertPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,  
}

export default ConcertPagePreview;