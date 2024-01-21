import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar.jsx';
import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('Sidebar Component', () => {
  test('renders component without errors', () => {
    const initialState = {
      theme: {
        isDarkMode: false
      }
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );

    // You can add more specific tests based on your component behavior
    expect(screen.getByText('Sidebar')).toBeInTheDocument();
    expect(
      screen.getByText('Top 10 most purchased in the last 7 days')
    ).toBeInTheDocument();
    expect(screen.getByTestId('testElement')).toBeInTheDocument();
  });

  // Add more tests as needed to cover specific scenarios
});
