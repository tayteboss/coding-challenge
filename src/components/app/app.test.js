import React from 'react'
import { shallow } from 'enzyme'

import App from './app.component'

describe('App Component', () => {
    it('app renders', () => {
        const wrapper = shallow(<App />)
        const productsState = wrapper.state.products
        expect(productsState).toEqual(0)
    })
})