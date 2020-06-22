import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Drawing from "../models/Drawing";


afterEach(cleanup);

test('<Drawing Buttons/>', () => {
    const {getByTestId} = render(<Drawing/>);
    console.error = jest.fn();
    console.log = jest.fn();

    const addTrackButton = getByTestId('add-track');
    const addCurveButton = getByTestId('add-curve');
    const addDeleteButton = getByTestId('delete-track');
    const addRotateButton = getByTestId('rotate-track');

    expect(addTrackButton.tagName).toBe('BUTTON');
    expect(addDeleteButton.tagName).toBe('BUTTON');
    expect(addCurveButton.tagName).toBe('BUTTON');
    expect(addRotateButton.tagName).toBe('BUTTON');

    expect(addTrackButton.textContent).toBe('ADD TRACK');
    expect(addCurveButton.textContent).toBe('ADD CURVE');
    expect(addDeleteButton.textContent).toBe('DELETE');
    expect(addRotateButton.textContent).toBe('ROTATE');

});


