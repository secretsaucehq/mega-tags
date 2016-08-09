import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import CommonInput from 'components/inputs/Common'
import { expect } from 'chai'

describe('CommonInput', () => {
  it('calls the onChange function with the input value', () => {
    const onChangeCallback = (val) => {
      console.log('callback triggered')
    }
    const renderedInput = TestUtils.renderIntoDocument(
      <CommonInput onChange={onChangeCallback} />
    )

    const input =  TestUtils.findRenderedDOMComponentWithTag(renderedInput, 'input')
    // TestUtils.Simulate.change(input)
  })
})

