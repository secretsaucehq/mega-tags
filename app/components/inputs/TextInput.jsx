import React, { PropTypes } from 'react'

const handleChange = (type, onChange, evt) => {
  onChange({[type]: evt.target.value})
}

const TextInput = ({ metaName, placeholder, onChange }) => (
  <input
    className='input-meta'
    onChange={handleChange.bind(null, metaName, onChange)}
    type='text'
    placeholder={placeholder} />
)

// TODO: make sure isOptional is real proptype
TextInput.propTypes = {
  metaName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
  placeholder: PropTypes.string,
}

export default TextInput

