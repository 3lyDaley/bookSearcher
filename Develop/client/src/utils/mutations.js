

// login(email: String!, password: String!): Auth
// addUser(username: String!, email: String!, password: String!): Auth
// saveBook(authors: String, description: String!, title: String!, bookId: String!, image: String, link: String): User
// removeBook(bookId: String!): User 

import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($authors: String, $description: String!, $title: String!) {
    addPost(authors: $authors, description: $$description, title: $title,) {
      authors
      description
      bookId
      title
      username
      postBody
      createdAt
      comments {
        _id
      }
    }
  }
`;