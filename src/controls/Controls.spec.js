// Test away!

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
    wrapper = rtl.render(<Controls />)
})


describe('Control Toggles On Click of Button', () => {
    
    //on startup, test that the buttons rendered are the default buttons
    it('renders properly', () => {
        expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
        rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
        expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/open gate/i)).not.toBeInTheDocument();
    })

})

