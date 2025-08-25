import { render, screen } from '@testing-library/react';
import FilterBar from '@/components/FilterBar';
import React from 'react';

test('renders filter bar controls', () => {
  render(<FilterBar status="all" category="" onChange={() => {}} />);
  expect(screen.getByText('All')).toBeInTheDocument();
  expect(screen.getByText('Active')).toBeInTheDocument();
  expect(screen.getByText('Completed')).toBeInTheDocument();
});
