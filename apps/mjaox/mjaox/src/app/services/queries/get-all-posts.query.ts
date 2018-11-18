import gql from 'graphql-tag';

export const getAllPosts = gql`
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
