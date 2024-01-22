import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Toggle } from './ToggleButton.js';
import '@testing-library/jest-dom';
import store from '../../redux/store.js';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

describe('Toggle Component', () => {
  it('renders without errors', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Toggle label="Toggle Label" toggled={false} onClick={() => {}} />
        </Provider>
      </MemoryRouter>
    );
    const toggleInput = getByLabelText('Toggle Label');

    expect(toggleInput).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClickMock = jest.fn();
    const { getByLabelText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Toggle label="Toggle Label" toggled={false} onClick={onClickMock} />
        </Provider>
      </MemoryRouter>
    );
    const toggleInput = getByLabelText('Toggle Label');

    fireEvent.click(toggleInput);

    expect(onClickMock).toHaveBeenCalled();
  });
});
