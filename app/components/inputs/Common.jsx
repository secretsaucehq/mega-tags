import React, { PropTypes } from 'react'
import TextInput from 'app/components/inputs/TextInput'

const CommonInput = ({ onChange }) => (
  <div className='input-common'>
    <h3>Common</h3>
    <TextInput metaName='title'
      placeholder='Title'
      onChange={onChange} />
    <TextInput metaName='description'
      placeholder='Description'
      onChange={onChange} />
    <TextInput metaName='image'
      placeholder='Site Image'
      onChange={onChange} />
  </div>
)

CommonInput.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default CommonInput

