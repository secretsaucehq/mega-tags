import { Actions } from '../actions'

const updateCommon = (state, action) => {
  switch (action.type) {
  case Actions.UPDATE:
    return {
      ...state,
      ...action.updatedCommon
    }
  default: return state;
  }
}

export default (state={}, action) => {
  switch (action.category) {
  case 'Common':
    return {
      ...state,
      Common: updateCommon(state.Common, action)
    }
  default: return state
  }
}
