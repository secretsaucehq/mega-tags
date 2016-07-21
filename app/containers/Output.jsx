import React from 'react'
import { connect } from 'react-redux'
import CommonOutput from '../components/outputs/Common'

const mapStateToProps = (state) => {
  return { output: state.output }
}

const Output = ({ output }) => (
  <CommonOutput output={output.Common} />
)

export default connect(mapStateToProps)(Output)

