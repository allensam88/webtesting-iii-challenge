import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

// 4. displays if gate is open/closed and if it is locked/unlocked
test('displays if gate is open and unlocked', () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    expect(getByText('Open')).toMatchSnapshot();
    expect(getByText('Unlocked')).toMatchSnapshot();
})

test('displays if gate is closed and unlocked', () => {
    const { getByText } = render(<Display closed={true} locked={false}/>);
    expect(getByText('Closed'));
    expect(getByText('Unlocked'));
})

test('displays if gate is closed and locked', () => {
    const { getByText } = render(<Display closed={true} locked={true}/>);
    expect(getByText('Closed'));
    expect(getByText('Locked'));
})

// 5. displays 'Closed' if the closed prop is true and 'Open' if otherwise
test('displays Closed if the closed prop is true', () => {
    const { getByText } = render(
        <Display closed={true} />
    );
    expect(getByText(/closed/i));
});

test('displays Open if the closed prop is false', () => {
    const { getByText } = render(
        <Display closed={false} />
    );
    expect(getByText('Open'));
});

// 6. displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
test('displays Locked if the locked prop is true', () => {
    const { getByText } = render(
        <Display locked={true} />
    );
    expect(getByText('Locked'));
});

test('displays Unlocked if the locked prop is false', () => {
    const { getByText } = render(
        <Display locked={false} />
    );
    expect(getByText('Unlocked'));
});

// 7. Displays red-led class when locked or closed
test('uses red-LED class when closed', async () => {
    const { findByText } = render(<Display closed={true} locked={true}/>);
    const locked = await findByText('Locked');
    expect(locked.className).toMatch(/red-led/);
});

// 8. Displays green-led class when unlocked or open
test('uses green-LED class when closed and locked', () => {
    const { getByText } = render(<Display closed={false} locked={false}/>);
    const locked = getByText('Unlocked');
    expect(locked.className).toMatch('green-led');
});