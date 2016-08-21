import React from 'react'
import { connect } from 'react-redux'
import CommonOutput from 'app/components/outputs/Common'
import TwitterOutput from 'app/components/outputs/Twitter'

const mapStateToProps = (state) => {
  return { output: state.output }
}

const Output = ({ output }) => (
  <div className='outputs'>
    <CommonOutput {...output.Common} />
    <TwitterOutput Common={output.Common} {...output.Twitter} />
  </div>
)

export default connect(mapStateToProps)(Output)

