import initialState from 'app/data/initial-state'
import { Actions } from 'app/actions'
import { updateCommon } from 'app/actions/common'
import { expect } from 'chai'

describe('Actions', () => {
  describe('Common', () => {
    it('creates an action to update Common', () => {
      const updatedCommon = {
        title: 'new title',
        description: 'new desc'
      }
      const expectedAction = {
        type: Actions.UPDATE,
        category: 'Common',
        updatedCommon
      }
      expect(updateCommon(updatedCommon)).to.deep.equal(expectedAction)
    })
  })
})

