import React, { PropTypes } from 'react'

const CommonOutput = ({ output }) => {
  console.log('DESCRIPTION: ', output.description)
  return (
    <div
      className='meta-tag'
      dangerouslySetInnerHTML={{__html: `meta name="description" content="${output.description || '\"\"'}"`}}>
    </div>
  )
}

export default CommonOutput

