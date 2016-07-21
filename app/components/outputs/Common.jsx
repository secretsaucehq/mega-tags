import React, { PropTypes } from 'react'

const Common = ({ output }) => {
  return (
    <div className='output-common'>
      <div className='meta-tag title'
        dangerouslySetInnerHTML={{__html: `meta name="title" content="${output.title}"`}} />
      <div className='meta-tag description'
        dangerouslySetInnerHTML={{__html: `meta name="description" content="${output.description}"`}} />
    </div>
  )
}

Common.propTypes = {
  output: PropTypes.object.isRequired
}

export default Common

