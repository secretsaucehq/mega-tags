import React, { PropTypes } from 'react'
import SingleMetaOutput from 'app/components/SingleMetaOutput'

const Twitter = ({ Common, card, site, creator, image, player }) => (
  <div className='output-twitter'>
    <h3>Twitter</h3>
    <SingleMetaOutput name='twitter:card' content={card} />
    <SingleMetaOutput name='twitter:title' content={Common.title} />
    <SingleMetaOutput name='twitter:description' content={Common.description} />
    <SingleMetaOutput name='twitter:site' content={site} />
    <SingleMetaOutput name='twitter:creator' content={creator} />
    <SingleMetaOutput name='twitter:image:src' content={image} />
    <SingleMetaOutput name='twitter:player' content={player} />
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

