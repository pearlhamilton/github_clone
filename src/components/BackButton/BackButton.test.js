import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BackButton from '.';

describe('BackButton', () => {
  beforeEach(() => {
    render(<BackButton />, { wrapper: MemoryRouter });
  })

  test('renders a back button', () => {
    const btn = screen.queryByText('Back');
    expect(btn).toBeInTheDocument();
  })
  
})
