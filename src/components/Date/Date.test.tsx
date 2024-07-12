import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Date from './Date';

describe('Date component', () => {
  test('renders day and month', () => {
    render(<Date day={1} month={12} />);
    expect(screen.getByText('Dnes je 1.12')).toBeInTheDocument();
  });
});
