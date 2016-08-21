import React, { PropTypes } from 'react'

const handleChange = (provider, onChange, evt) => {
  onChange({[provider]: evt.target.checked})
}

const ProviderToggle = ({ provider, checked, onChange }) => (
  <div>
    <input type='checkbox'
      checked={checked}
      onChange={handleChange.bind(null, provider, onChange)} />
    <span>{provider}</span>
  </div>
)

export default ProviderToggle

