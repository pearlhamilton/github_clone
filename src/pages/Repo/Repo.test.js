import { screen, render } from '@testing-library/react';
import Repo from '.';

describe('Repo', () => {
  beforeEach(() => {
    render(<Repo />);
  })

  test("it renders", () => {
    const main = screen.getByRole('main');
    expect(main).toBeDefined();
  });
})
