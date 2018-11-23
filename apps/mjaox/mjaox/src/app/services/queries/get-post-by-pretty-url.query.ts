import gql from 'graphql-tag';

export const getPostByPrettyUrl = gql`
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
