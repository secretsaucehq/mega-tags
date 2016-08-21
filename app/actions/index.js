import { Actions } from 'app/actions/types'

export const updateCommon = (updatedCommon) => {
  return {
    type: Actions.UPDATE,
    category: 'Common',
    updatedCommon
  }
}

export const updateTwitter = (updatedTwitter) => {
  return {
    type: Actions.UPDATE,
    category: 'Twitter',
    updatedTwitter
  }
}

