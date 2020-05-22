import React from 'react';
import {render, cleanup} from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

test('<App Buttons/>', () => {
    const {getByText, getByTestId} = render(<App/>)
    console.error = jest.fn();

    const addTrackButton = getByTestId('add-track');
    const addCurveButton = getByTestId('add-curve');
    const addDeleteButton = getByTestId('delete-track');

    expect(addTrackButton.tagName).toBe('BUTTON');
    expect(addDeleteButton.tagName).toBe('BUTTON');
    expect(addCurveButton.tagName).toBe('BUTTON');

    expect(addTrackButton.textContent).toBe('ADD TRACK');
    expect(addCurveButton.textContent).toBe('ADD CURVE');
    expect(addDeleteButton.textContent).toBe('DELETE');

})

