import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('First Test', () => {
  render(<App />);
  const titleHelloWorld = screen.getByText(/testing/i);
  const input = screen.getByPlaceholderText(/input/i);
  const btn = screen.getByRole('button');

  expect(titleHelloWorld).toBeInTheDocument(); 
  expect(input).toBeInTheDocument(); 
  expect(btn).toBeInTheDocument(); 
});
