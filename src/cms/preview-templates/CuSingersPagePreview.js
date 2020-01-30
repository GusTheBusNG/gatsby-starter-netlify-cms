import React from 'react'
import PropTypes from 'prop-types'
import { CUSingersPageTemplate } from '../../templates/cu-singers-page'

const CUSingersPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
 
  if (data) {
    return (
      <CUSingersPageTemplate
        image={data.image}
        header={data.header}
        subheading={data.subheading}
        about={data.about}
        buttonText={data.buttonText}
        subheadingTwo={data.subheadingTwo}
        auditionText={data.auditionText}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

CUSingersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CUSingersPagePreview
