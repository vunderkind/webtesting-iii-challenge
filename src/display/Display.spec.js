// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
    wrapper = rtl.render(<Display />)
})

describe("Testing what is displayed", () => {
test("When the gate is open or closed, let the display reflect as such", () => {
    const wrapper = rtl.render(<Display closed={true}/>);
    expect(wrapper.queryByText(/closed/i)).toBeInTheDocument(); 
    expect(wrapper.queryByText(/open/i)).toBeVisible();    
});

});