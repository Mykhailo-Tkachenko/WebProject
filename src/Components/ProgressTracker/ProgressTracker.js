import React from 'react'
import PropTypes from 'prop-types'
import './ProgressTracker.css'

export const ProgressTracker = ({ progress }) => (
  <div className="progress-tracker">
    <div className="progress-bar" style={{ width: `${progress}%` }}>
      {progress}%
    </div>
  </div>
)

ProgressTracker.propTypes = {
  progress: PropTypes.number.isRequired
}
