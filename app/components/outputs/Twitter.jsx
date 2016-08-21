import React, { PropTypes } from 'react'

const Twitter = ({ Common, card, site, creator, image, player }) => (
  <div className='output-twitter'>
    <h3>Twitter</h3>
    <div dangerouslySetInnerHTML={{__html: `meta name="twitter:card" content="${card}"`}} />
    <div dangerouslySetInnerHTML={{__html: `meta name="twitter:title" content="${Common.title}"`}} />
    <div dangerouslySetInnerHTML={{__html: `meta name="twitter:description" content="${Common.description}"`}} />
    <div dangerouslySetInnerHTML={{__html: `meta name="twitter:site" content="${site}"`}} />
    <div dangerouslySetInnerHTML={{__html: `meta name="twitter:creator" content="${creator}"`}} />
    <div dangerouslySetInnerHTML={{__html: `meta name="twitter:image:src" content="${image}"`}} />
    <div dangerouslySetInnerHTML={{__html: `meta name="twitter:player" content="${player}"`}} />
  </div>
)

Twitter.propTypes = {
  Common: PropTypes.object.isRequired,
  card: PropTypes.string,
  site: PropTypes.string,
  creator: PropTypes.string,
  image: PropTypes.string,
  player: PropTypes.string
}

export default Twitter

