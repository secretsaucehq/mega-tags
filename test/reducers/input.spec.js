import inputReducer from 'app/reducers/input'
import initialState from 'app/data/initial-state'
import { updateCommon } from 'app/actions'
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

