import React, { PropTypes } from 'react'

const handleChange = (type, onChange, evt) => {
  onChange({[type]: evt.target.value})
}

const TextInput = ({ metaName, label, placeholder, onChange }) => (
  <div className='form-control'>
    <label>{label}</label>
    <input
      className='input-meta'
      onChange={handleChange.bind(null, metaName, onChange)}
      type='text'
      placeholder={placeholder} />
  </div>
)

// TODO: make sure isOptional is real proptype
TextInput.propTypes = {
  metaName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default TextInput

