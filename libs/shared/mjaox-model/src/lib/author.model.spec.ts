import { Author } from './author.model';

describe('Author Model', () => {
  it('should initiate with defaults', () => {
    const author = new Author();
    expect(author).toMatchSnapshot();
  });
});
