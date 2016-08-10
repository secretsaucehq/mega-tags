import React from 'react'
import { connect } from 'react-redux'
import CommonInput from 'app/components/inputs/Common'
import { updateCommon } from 'app/actions/common'

const Input = ({ dispatch }) => (
  <div>
    <CommonInput onChange={updated => { dispatch(updateCommon(updated)) }}/>
  </div>
)

export default connect()(Input)

