const schema = `#graphql
type User {
  id: ID!
  email: String!
  createdAt: String!
  token: String
}

type Query {
  me: User
}

input AuthInput {
  email: String!
  password: String!
}

type Mutation {
  createUser(input: AuthInput!): User
  signin(input: AuthInput!): User
}
`

export default schema
