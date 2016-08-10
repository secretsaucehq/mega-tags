import React from 'react'
import { shallow  } from 'enzyme'
import chai, { expect } from 'chai'
import spies from 'chai-spies'
import CommonInput from 'components/inputs/Common'

chai.use(spies)

describe('CommonInput', () => {
  const minProps = { onChange: () => {} }
  const minWrapper = () => {
    return shallow(<CommonInput {...minProps} />)
  }

  it('renders the wrapper element', () => {
    expect(minWrapper().find('.input-common').length).to.equal(1)
  })

  it('renders input elements', ()  => {
    expect(minWrapper().find('input').length).to.equal(2)
  })

  it('defines the onChange callback', () => {
    expect(minWrapper().props().onChange).to.be.defined
  })

  it('calls the onChange function with the input value', () => {
    const onChange = chai.spy()
    const wrapper = shallow(<CommonInput {...minProps} onChange={onChange} />)
    wrapper
      .find('input').at(0)
      .props()
      .onChange({target: {value: '123123'}}, onChange)
    expect(onChange).to.have.been.called();
  })
})

