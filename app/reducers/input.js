import { Actions } from 'app/actions/types'

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

const updateTwitter = (state, action) => {
  switch(action.type) {
  case Actions.UPDATE:
    return {
      ...state,
      ...action.updatedTwitter
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
  case 'Twitter':
    return {
      ...state,
      Twitter: updateTwitter(state.Twitter, action)
    }
  default: return state
  }
}

