// SignIn.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignIn from './Login.jsx';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import store from '../../redux/store.js';

describe('SignIn Component', () => {
  test('renders component without errors', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SignIn show={true} handleClose={() => {}} />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId('nameOfHeader')).toBeInTheDocument();
  });
  /*
  test('handles form submission', async () => {
    //const mockNavigate = jest.fn();
    //const handleClose = jest.fn();

    render(
      <MemoryRouter>
        <Provider store={store}>
          <SignIn show={true} handleClose={() => {}} />
        </Provider>
      </MemoryRouter>
    );

    fireEvent.change(screen.getByTestId('inputUsername'), {
      target: { value: 'testuser' }
    });
    fireEvent.change(screen.getByTestId('inputPassword'), {
      target: { value: 'testpassword' }
    });
    //fireEvent.click(screen.getByTestId('login-button'));

    await waitFor(
      () => expect(screen.getByText('testuser')).toBeInTheDocument(),
      expect(screen.getByText('testpassword')).toBeInTheDocument()
    );
    //expect(mockNavigate).toHaveBeenCalled();
    //expect(handleClose).toHaveBeenCalled();
  });*/
});
