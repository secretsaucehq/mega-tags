import React, { PropTypes } from 'react'
import SingleMetaOutput from 'app/components/SingleMetaOutput'
import SingleCommentOutput from 'app/components/SingleCommentOutput'
import SinglePlainTag from 'app/components/SinglePlainTag'

const Common = ({ title, description, image }) => (
  <div className='output-common'>
    <h3>Common</h3>
    <SinglePlainTag tagName='meta' content='charset="utf-8"' />
    <SinglePlainTag tagName='title' content={title} selfClosing={false}/>
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

