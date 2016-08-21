import React from 'react'
import { connect } from 'react-redux'
import CommonInput from 'app/components/inputs/Common'
import TwitterInput from 'app/components/inputs/Twitter'
import { updateCommon, updateTwitter } from 'app/actions'

const Input = ({ dispatch }) => (
  <div>
    <CommonInput onChange={updated => { dispatch(updateCommon(updated)) }}/>
    <TwitterInput onChange={updated => { dispatch(updateTwitter(updated)) }} />
  </div>
)

export default connect()(Input)

