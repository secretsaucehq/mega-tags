jest.unmock('../../app/reducers/input')
jest.unmock('../../app/actions/common')

import inputReducer from '../../app/reducers/input'
import initialState from '../../app/data/initial-state'
import { updateCommon } from '../../app/actions/common'

describe('inputReducer', () => {
  describe('Common', () => {
    it('update common', () => {
      const updatedCommon = {
        title: 'new title',
        description: 'new desc'
      }
      const action = updateCommon(updatedCommon)
      const newState = inputReducer(initialState.output, action)
      expect(newState.Common).toEqual(updatedCommon)
    })
  })
})

