import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

// 9. provide buttons to toggle the closed and locked states.


// 10. buttons' text changes to reflect the state the door will be in if clicked
test('Close button triggers toggle from open to close state', () => {
    const toggleClosedMock = jest.fn();
    const { getByText, findByText } = render(
        <Controls toggleClosed={toggleClosedMock} locked={false}/>
    );
    fireEvent.click(getByText(/close gate/i)); //1st button click
    expect(toggleClosedMock).toHaveBeenCalled();
    expect(findByText(/open gate/));
});

test('Open button triggers toggle from close to open state', async () => {
    const toggleClosedMock = jest.fn();
    const { findByText } = render(
        <Controls toggleClosed={toggleClosedMock} closed={true}/>
    );
    fireEvent.click(await findByText(/open gate/i));
    expect(toggleClosedMock).toHaveBeenCalled();
    expect(findByText(/close gate/));
});

// 11. the closed toggle button is disabled if the gate is locked


// 12. the locked toggle button is disabled if the gate is open