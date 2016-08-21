import React from 'react'
import { connect } from 'react-redux'
import CommonInput from 'app/components/inputs/Common'
import TwitterInput from 'app/components/inputs/Twitter'
import { updateCommon, updateTwitter } from 'app/actions'

const mapStateToProps = (state) => {
  return { providers: state.providers }
}

const Input = ({ dispatch, providers }) => (
  <div>
    <CommonInput onChange={updated => { dispatch(updateCommon(updated)) }}/>
    { providers.Twitter ? <TwitterInput onChange={updated => { dispatch(updateTwitter(updated)) }} /> : null}
  </div>
)

export default connect(mapStateToProps)(Input)

