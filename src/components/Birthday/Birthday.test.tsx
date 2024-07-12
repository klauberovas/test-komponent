import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Birthday from './Birthday';

describe('Birthday component', () => {
  test('renders name', () => {
    render(<Birthday name="Lucie" />);
    expect(
      screen.getByText('Lucie má narozeniny 29. 2. 1988'),
    ).toBeInTheDocument();
  });

  test('name not founded', () => {
    render(<Birthday name="Adam" />);
    expect(
      screen.getByText('Nevíme, kdy Adam má narozeniny'),
    ).toBeInTheDocument();
  });
});
