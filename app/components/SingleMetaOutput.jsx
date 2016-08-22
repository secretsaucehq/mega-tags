import React, { PropTypes } from 'react'

const innerHtml = (name, itemprop, content) => {
  if(itemprop) {
    return `&lt;meta itemprop="${itemprop}" content="${content}"&gt;`
  } else {
    return `&lt;meta name="${name}" content="${content}"&gt;`
  }
}

const SingleMetaOutput = ({ name, itemprop, content }) => (
  <div dangerouslySetInnerHTML={{__html: innerHtml(name, itemprop, content)}} />
)

SingleMetaOutput.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string,
  itemprop: PropTypes.string
}

export default SingleMetaOutput

