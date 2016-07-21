import { Actions } from '../index'

export const updateCommon = (updatedCommon) => {
  return {
    type: Actions.UPDATE,
    category: 'Common',
    updatedCommon
  }
}

