import gql from 'graphql-tag';
import { Post } from './graphcms.model';

export interface BlogPostsResponse {
  posts: Post[];
}

export const BlogPosts = gql`
  query {
    posts {
      title
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
