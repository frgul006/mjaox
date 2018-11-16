import { Post } from '@mjaox/shared/mjaox-model';
import gql from 'graphql-tag';

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
        description
        twitter
        github
        profileimage {
          handle
        }
      }
      summary
      content
      image {
        handle
      }
      tags {
        title
      }
      links {
        title
        url
        description
      }
      uploads {
        updatedAt
        handle
        fileName
        mimeType
      }
    }
  }
`;
