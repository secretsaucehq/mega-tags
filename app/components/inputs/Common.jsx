import React, { PropTypes } from 'react'

const handleChange = (type, onChange, evt) => {
  onChange({[type]: evt.target.value})
}

const Common = ({ onChange }) => (
  <div className='input-common'>
    <input
      onChange={handleChange.bind(null, 'title', onChange)}
      type='text'
      placeholder='Title' />
    <input
      onChange={handleChange.bind(null, 'description', onChange)}
      type='text'
      placeholder='Description' />
  </div>
)

Common.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Common

