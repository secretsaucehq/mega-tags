import { Actions } from 'app/actions/types'

export default (state={}, action) => {
  switch (action.category) {
  case 'Providers':
    return {
      ...state,
      ...action.updatedProviders
    }
  default: return state;
  }
}

