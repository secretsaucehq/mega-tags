import React, { PropTypes } from 'react'

const SingleCommentOutput = ({ comment }) => (
  <div dangerouslySetInnerHTML={{__html: `&lt;!-- ${comment} --&gt;`}}/>
)

SingleCommentOutput.propTypes = {
  comment: PropTypes.string.isRequired
}

export default SingleCommentOutput

