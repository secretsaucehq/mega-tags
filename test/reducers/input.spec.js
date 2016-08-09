import inputReducer from 'reducers/input'
import initialState from 'data/initial-state'
import { updateCommon } from 'actions/common'
import { expect } from 'chai'

describe('inputReducer', () => {
  describe('Common', () => {
    it('update common', () => {
      const updatedCommon = {
        title: 'new title',
        description: 'new desc'
      }
      const action = updateCommon(updatedCommon)
      const newState = inputReducer(initialState.output, action)
      expect(newState.Common).to.deep.equal(updatedCommon)
    })
  })
})

