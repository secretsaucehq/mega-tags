import React, { PropTypes } from 'react'

const innerHtml = (tagName, content, selfClosing=true) => {
  if(selfClosing) {
    return `&lt;${tagName} ${content} /"&gt;`
  } else {
    return `&lt;${tagName}&gt;${content}&lt;/${tagName}&gt;`
  }
}

const SinglePlainTag = ({ tagName, content, selfClosing }) => (
  <div dangerouslySetInnerHTML={{__html: innerHtml(tagName, content, selfClosing)}} />
)

SinglePlainTag.propTypes = {
  content: PropTypes.string.isRequired,
  tagName: PropTypes.string,
  selfClosing: PropTypes.bool
}

export default SinglePlainTag

