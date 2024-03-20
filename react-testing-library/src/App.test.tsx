import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Testing react app', () => {
  test('Components in the document', () => {
    render(<App />);
    const titleHelloWorld = screen.getByText(/testing/i);
    const input = screen.getByPlaceholderText(/input/i);
    const btn = screen.getByRole('button');
  
    expect(titleHelloWorld).toBeInTheDocument(); 
    expect(input).toBeInTheDocument(); 
    expect(btn).toBeInTheDocument(); 
  });

  test('Async', async () => {
    render(<App />);
    const titleHelloWorld = await screen.findByText(/John/i);
    expect(titleHelloWorld).toBeInTheDocument();
  });

  test('Click Event', async () => {
    render(<App />);
    const btn = screen.getByRole('button');
    expect(screen.queryByTestId('toggle')).toBeNull()
    fireEvent.click(btn)
    expect(screen.getByTestId('toggle')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle')).toBeNull()
  });
})
