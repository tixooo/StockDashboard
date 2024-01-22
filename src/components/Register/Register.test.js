import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUp from './Register.jsx';
import { Provider } from 'react-redux';
import store from '../../redux/store.js';
import { MemoryRouter } from 'react-router-dom';

describe('SignUp Component', () => {
  test('renders component without errors', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SignUp show={true} handleClose={() => {}} />
        </Provider>
      </MemoryRouter>
    );

    // Check if the component renders without crashing
    expect(screen.getByTestId('registerBtn')).toBeInTheDocument();
  });

  test('displays error message for password mismatch', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SignUp show={true} handleClose={() => {}} />
        </Provider>
      </MemoryRouter>
    );

    // Simulate form submission with mismatched passwords
    fireEvent.change(screen.getByTestId('passwordInput'), {
      target: { value: 'password1' }
    });
    fireEvent.change(screen.getByTestId('repeatPasswordInput'), {
      target: { value: 'password2' }
    });
    fireEvent.click(screen.getByTestId('registerBtn'));

    // Check if error message is displayed
    await waitFor(() =>
      expect(screen.getByText('Passwords do not match')).toBeInTheDocument()
    );
  });

  test('submits form and triggers success message', async () => {
    const mockNavigate = jest.fn();
    const handleClose = jest.fn();

    render(
      <MemoryRouter>
        <Provider store={store}>
          <SignUp show={true} handleClose={handleClose} />
        </Provider>
      </MemoryRouter>
    );

    // Simulate valid form submission
    fireEvent.change(screen.getByTestId('fullNameInput'), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByTestId('usernameInput'), {
      target: { value: 'john_doe' }
    });
    fireEvent.change(screen.getByTestId('passwordInput'), {
      target: { value: 'password' }
    });
    fireEvent.change(screen.getByTestId('repeatPasswordInput'), {
      target: { value: 'password' }
    });
    fireEvent.change(screen.getByTestId('emailInput'), {
      target: { value: 'john@example.com' }
    });
    fireEvent.click(screen.getByTestId('registerBtn'));

    // Check if success message is displayed
    await waitFor(() =>
      expect(
        screen.getByText('Registration successful! Logging you in.')
      ).toBeInTheDocument()
    );

    // Check if navigate and handleClose functions are called
    setTimeout(() => {
      expect(mockNavigate).toHaveBeenCalled();
      expect(handleClose).toHaveBeenCalled();
    }, 2000);
  });
});
