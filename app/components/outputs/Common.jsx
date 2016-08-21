import React, { PropTypes } from 'react'

const Common = ({ title, description, image }) => {
  return (
    <div className='output-common'>
      <h3>Common</h3>
      <div
        dangerouslySetInnerHTML={{__html: `meta itemprop="name" content="${title}"`}} />
      <div
        dangerouslySetInnerHTML={{__html: `meta name="description" itemprop="description" content="${description}"`}} />
      <div
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

