import { Image } from './image.model';

export class Author {
  id: string;
  firstname: string;
  lastname: string;
  twitter: string;
  github: string;
  profileimage: Image;
  description: string;

  static mockOne() {
    return {
      id: '001',
      firstname: 'Tester',
      lastname: 'Testsson',
      twitter: '@tester',
      github: 'github.com/tester',
      profileimage: Image.mockOne()
    } as Author;
  }
}
