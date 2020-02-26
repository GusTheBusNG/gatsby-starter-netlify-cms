import React from 'react'
import PropTypes from 'prop-types'
import { StaffPageTemplate } from '../../templates/staff-page'

const StaffPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  const {
    staffHeading,
    staffList
  } = data;
 
  if (data) {
    return (
      <StaffPageTemplate
        staffHeading={staffHeading}
        staffList={staffList}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

StaffPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default StaffPagePreview
