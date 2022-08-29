import {gql} from '@apollo/client'

// type Query {
//   me: User
//   users: [User]
//   user(username: String!): User
// }

export const GET_ME = gql `
{
  me {
    _id
    username
    email
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`

