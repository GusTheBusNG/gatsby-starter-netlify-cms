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
        button={data.button}
        subheadingTwo={data.subheadingTwo}
        auditionInformation={data.auditionInformation}
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
