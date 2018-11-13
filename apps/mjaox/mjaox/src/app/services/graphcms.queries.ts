import gql from 'graphql-tag';
import { Post } from './graphcms.model';

export interface BlogPostsResponse {
  posts: Post[];
}

export const BlogPosts = gql`
  query {
    posts {
      id
      title
      prettyurl
      author {
        firstname
        lastname
        profileimage {
          handle
        }
      }
      summary
      image {
        handle
      }
      tags {
        title
      }
    }
  }
`;

export const BlogPost = gql`
  query($prettyurl: String!) {
    posts(where: { prettyurl: $prettyurl }) {
      id
      title
      prettyurl
      author {
        firstname
        lastname
        profileimage {
          handle
        }
      }
      summary
      image {
        handle
      }
      tags {
        title
      }
    }
  }
`;
