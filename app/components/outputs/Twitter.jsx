import React, { PropTypes } from 'react'

const Twitter = ({ Common, card }) => (
  <div className='output-twitter'>
    <h3>Twitter</h3>
    <div dangerouslySetInnerHTML={{__html: `meta name="twitter:card" content="${card}"`}} />
    <div dangerouslySetInnerHTML={{__html: `meta name="twitter:title" content="${Common.title}"`}} />
    <div dangerouslySetInnerHTML={{__html: `meta name="twitter:description" content="${Common.description}"`}} />
  </div>
)

Twitter.propTypes = {
  Common: PropTypes.object.isRequired,
  card: PropTypes.string.isRequired
}

export default Twitter

