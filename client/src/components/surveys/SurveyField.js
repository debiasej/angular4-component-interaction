// Contain logic to render a single label and text input
import React from 'react'
import PropTypes from 'prop-types'

// input belongs to the props object
const SurveyField = ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      {/* avoid us to write: onBlur={input.onBlur onChange={input.onChange} and so... */}
      <input {...input} />
    </div>
  )
}

SurveyField.propTypes = {
  input: PropTypes.object, // This function is provided by redux-form
  label: PropTypes.string
}

export default SurveyField
