export const schema = `#graphql
  type User {
    id: ID!
    email: String!
    createdAt: String!
    token: String
  }

  input AuthInput {
    email: String!
    password: String!
  }

  type Query {
    me: User
  }

  type Issue {
    id: ID!
    createdAt: String!
    userId: String!
    user: User!
    status: IssueStatus
    content: String!
    name: String!
    }

    enum IssueStatus {
        BACKLOG
        TODO
        INPROGRESS
        DONE
    }

    input CreateIssueInput {
        name: String!
        content: String!
        status: IssueStatus
    }

  type Mutation {
    createIssue(input: CreateIssueInput!): Issue!
    signin(input: AuthInput!): User
    createUser(input: AuthInput!): User
  }
`
