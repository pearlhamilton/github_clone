import { screen } from '@testing-library/react';
import Repo from '.';

describe('About', () => {
  beforeEach(() => {
    render(<Repo />);
  })

  test("it renders", () => {
    const main = screen.getByRole('main');
    expect(main).toBeDefined();
  });
})
