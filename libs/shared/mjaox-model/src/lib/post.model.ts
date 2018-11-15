import { Author } from './author.model';
import { Image } from './image.model';
import { Tag } from './tag.model';

export class Post {
  id: string;
  title: string;
  prettyurl: string;
  author: Author;
  summary: string;
  content: string;
  image: Image;
  tags: Tag[];

  static mockOne() {
    return {
      id: '000',
      title: 'Mocked Post',
      prettyurl: 'mocked_post.html',
      author: Author.mockOne(),
      summary: 'Test summary',
      image: Image.mockOne(),
      tags: Tag.mockMany(),
      content: '#Hello world'
    } as Post;
  }
}
