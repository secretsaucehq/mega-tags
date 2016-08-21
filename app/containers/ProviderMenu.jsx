import React from 'react'
import { connect } from 'react-redux'
import ProviderToggle from 'app/components/ProviderToggle'
import { updateProviders } from 'app/actions'

const mapStateToProps = (state) => {
  return { ...state.providers }
}

const ProviderMenu = ({ dispatch, Twitter }) => (
  <div>
    <h3>Provider Menu</h3>
    <ProviderToggle provider='Twitter'
      checked={Twitter}
      onChange={updated => { dispatch(updateProviders(updated)) }} />
  </div>
)

export default connect(mapStateToProps)(ProviderMenu)

