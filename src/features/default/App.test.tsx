import React from 'react';
import { render, screen } from '@testing-library/react';
import DefaultApp from './App';

test('renders learn react link', () => {
  render(<DefaultApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
