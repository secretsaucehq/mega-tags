import React, { PropTypes } from 'react'

const Common = ({ title, description, image }) => {
  return (
    <div className='output-common'>
      <div className='meta-tag title'
        dangerouslySetInnerHTML={{__html: `meta itemprop="name" content="${title}"`}} />
      <div className='meta-tag description'
        dangerouslySetInnerHTML={{__html: `meta name="description" itemprop="description" content="${description}"`}} />
      <div className='meta-tag image'
        dangerouslySetInnerHTML={{__html: `meta name="image" itemprop="image" content="${image}"`}} />
    </div>
  )
}

Common.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Common

