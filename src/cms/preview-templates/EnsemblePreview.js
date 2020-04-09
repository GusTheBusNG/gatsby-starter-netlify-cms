import React from 'react'
import PropTypes from 'prop-types'
import { EnsemblesTemplate } from '../../templates/ensembles'

const EnsemblesPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
 
  if (data) {
    return (
      <EnsemblesTemplate
        image={data.image}
        header={data.header}
        subheading={data.subheading}
        about={data.about}
        concertAttire={data.concertAttire}
        subheadingTwo={data.subheadingTwo}
        auditionInformation={data.auditionInformation}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

EnsemblesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default EnsemblesPreview
