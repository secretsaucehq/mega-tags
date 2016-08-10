import { Actions } from 'app/actions/index'

export const updateCommon = (updatedCommon) => {
  return {
    type: Actions.UPDATE,
    category: 'Common',
    updatedCommon
  }
}

