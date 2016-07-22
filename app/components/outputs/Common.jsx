import React, { PropTypes } from 'react'

const Common = ({ title, description }) => {
  return (
    <div className='output-common'>
      <div className='meta-tag title'
        dangerouslySetInnerHTML={{__html: `meta name="title" content="${title}"`}} />
      <div className='meta-tag description'
        dangerouslySetInnerHTML={{__html: `meta name="description" content="${description}"`}} />
    </div>
  )
}

Common.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Common

