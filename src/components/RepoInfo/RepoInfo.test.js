import { screen, render } from '@testing-library/react';
import RepoInfo from '.';

describe('RepoInfo', () => {
  beforeEach(() => {
    const fakeResult = {
      owner: {
        avatar_url: "test.url",
        login: "test"
      },
      html_url: "test-url",
      name: "test-name",
      description: "test description",
      forks: 0,
      open_issues: 1,
      watchers: 2,
      subscribers_count: 3
    }
    render(<RepoInfo repo={fakeResult} />);
  })

  test('it should show an image with the url and alt of the username', () => {
    const image = screen.getByAltText('test');
    expect(image.src).toContain('test.url');
    expect(image.alt).toContain('test');
  })

  test('it should show the users username as a title', () => {
    const title = screen.getByText('test');
    expect(title).toBeInTheDocument();
  })

  test('it should render the repo name as an achor tag with a link to the repo', () => {
    const anchor = screen.getByText('test-name');
    expect(anchor.href).toContain('test-url');
    expect(anchor).toBeInTheDocument();
  })

  test('it should render a fork number', () => {
    const stat = screen.getByText('0');
    expect(stat).toBeInTheDocument();
  })

  test('it should render a watchers number', () => {
    const stat = screen.getByText('1');
    expect(stat).toBeInTheDocument();
  })

  test('it should render a fork number', () => {
    const stat = screen.getByText('2');
    expect(stat).toBeInTheDocument();
  })

  test('it should render a sub count number', () => {
    const stat = screen.getByText('3');
    expect(stat).toBeInTheDocument();
  })
  
  
})
