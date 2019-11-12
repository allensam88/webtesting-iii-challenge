import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';
import Display from '../display/Display';
import Controls from '../controls/Controls';


// 1. defaults to unlocked and open
test('default render is unlocked and open', () => {
    const { getByText } = render(<Dashboard locked={false} closed={false} />);
    expect(getByText(/unlocked/i))
    expect(getByText(/open/i));
})

// 2. cannot be closed or opened if it is locked
// cannot be opened if it is locked or it cannot be locked if it is open.
test('cannot be opened if it is locked', () => {
    const toggleLockedMock = jest.fn();
    render(<Controls toggleLocked={toggleLockedMock} locked={false} closed={false}/>)
    expect(toggleLockedMock).not.toHaveBeenCalled();
});

Test('cannot be locked if it is open', async () => {
    const toggleLockedMock = jest.fn();
    render(<Controls toggleLocked={toggleLockedMock} locked={false} closed={false}/>)
})

// 3. shows the controls and display
test('renders the display', () => {
    render(<Display/>)
})

test('renders the controls', () => {
    render(<Controls/>)
})