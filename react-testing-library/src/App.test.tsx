import React from 'react';
import { render, screen } from '@testing-library/react';
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

  test('First Test', async () => {
    render(<App />);
    const titleHelloWorld = await screen.findByText(/John/i);
    expect(titleHelloWorld).toBeInTheDocument();
  });
})
