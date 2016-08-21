import React, { PropTypes } from 'react'
import TextInput from 'app/components/inputs/TextInput'

const TwitterInput = ({ onChange }) => (
  <div className='input-twitter'>
    <h3>Twitter</h3>
    <TextInput metaName='card'
      label='Card Summary'
      placeholder='A brief summary'
      onChange={onChange} />
    <TextInput metaName='site'
      label='Publisher’s handle'
      placeholder='@publisher_handle'
      onChange={onChange} />
    <TextInput metaName='creator'
      label='Article author’s handle'
      placeholder='@author_handle'
      onChange={onChange} />
    <TextInput metaName='image'
      label='Image (optimal size is...)'
      placeholder='https://example.com/image.jpg'
      onChange={onChange} />
    <TextInput metaName='player'
      label='Video/Audio Player Source'
      placeholder='https://example.com/video.avi'
      onChange={onChange} />
  </div>
)

export default TwitterInput

