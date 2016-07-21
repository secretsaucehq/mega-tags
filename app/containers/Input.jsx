import React from 'react'
import { connect } from 'react-redux'
import CommonInput from '../components/inputs/Common'
import { updateCommon } from '../actions/common'

const Input = ({ dispatch }) => (
  <div>
    <CommonInput onChange={updated => { dispatch(updateCommon(updated)) }}/>
  </div>
)

export default connect()(Input)

