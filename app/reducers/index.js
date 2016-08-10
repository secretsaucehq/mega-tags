import { combineReducers  } from 'redux'
import input from 'app/reducers/input'

export default combineReducers({
  output: input
})

