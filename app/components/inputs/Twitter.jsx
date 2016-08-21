import React, { PropTypes } from 'react'
import TextInput from 'app/components/inputs/TextInput'

const TwitterInput = ({ onChange }) => (
  <div className='input-twitter'>
    <h3>Twitter</h3>
    <TextInput metaName='card'
      placeholder='Card Summary'
      onChange={onChange} />
  </div>
)

export default TwitterInput

