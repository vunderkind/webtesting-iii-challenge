// Test away

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';
import Controls from '../controls/Controls';


afterEach(rtl.cleanup);

let wrapper;
let control;

beforeEach(() => {
    wrapper = rtl.render(<Dashboard />);
    control = rtl.render(<Controls />)
})


describe('Control Toggles On Click of Button', () => {
    
    //on startup, test that the buttons rendered are the default buttons
    it('Indicator is locked when gate is locked', () => {
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/locked/i)).toBeVisible();

    })

})

