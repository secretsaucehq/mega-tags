import React, { PropTypes } from 'react'
import SingleMetaOutput from 'app/components/SingleMetaOutput'
import SingleCommentOutput from 'app/components/SingleCommentOutput'

const Common = ({ title, description, image }) => (
  <div className='output-common'>
    <h3>Common</h3>
    <SingleCommentOutput comment='Search Engine' />
    <SingleMetaOutput name='description' content={description} />
    <SingleMetaOutput name='image' content={image} />
    <SingleCommentOutput comment='Schema.org' />
    <SingleMetaOutput itemprop='name' content={title} />
    <SingleMetaOutput itemprop='description' content={description} />
    <SingleMetaOutput itemprop='image' content={image} />
  </div>
)

Common.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Common

