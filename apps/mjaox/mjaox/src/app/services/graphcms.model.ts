export interface Author {
  id: string;
  firstname: string;
  lastname: string;
  twitter: string;
  github: string;
  profileimage: Image;
}

export interface Image {
  id: string;
  url: string;
  handle: string;
}

export interface Tag {
  id: string;
  title: string;
}

export interface Post {
  id: string;
  title: string;
  prettyurl: string;
  author: Author;
  summary: string;
  image: Image;
  tags: Tag[];
}
