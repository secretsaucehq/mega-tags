import React, { PropTypes } from 'react'
import TextInput from 'app/components/inputs/TextInput'

const CommonInput = ({ onChange }) => (
  <div className='input-common'>
    <h3>Common</h3>
    <TextInput metaName='title'
      label='Page Title'
      placeholder='Page Title'
      onChange={onChange} />
    <TextInput metaName='description'
      label='Page Description'
      placeholder='Page Description'
      onChange={onChange} />
    <TextInput metaName='image'
      label='Site Image'
      placeholder='https://example.com/image.jpg'
      onChange={onChange} />
  </div>
)

CommonInput.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default CommonInput

