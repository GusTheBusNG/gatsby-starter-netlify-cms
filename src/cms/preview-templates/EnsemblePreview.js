import React from 'react'
import PropTypes from 'prop-types'
import { EnsemblesTemplate } from '../../templates/ensembles'

const EnsemblesPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
 
  if (data) {
    return (
      <EnsemblesTemplate
        image={data.image}
        header={data.header}
        subheading={data.subheading}
        concertAttire={data.concertAttire}
        subheadingTwo={data.subheadingTwo}
        auditionInformation={data.auditionInformation}
        subheadingThree={data.subheadingThree}
        featuredRecordingAudio={data.featuredRecordingAudio}
        featuredRecordingVideo={data.featuredRecordingVideo}
        html={widgetFor('body')}
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
