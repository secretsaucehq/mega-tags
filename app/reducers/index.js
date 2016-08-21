import { combineReducers  } from 'redux'
import input from 'app/reducers/input'
import providers from 'app/reducers/providers'

export default combineReducers({
  output: input,
  providers
})

