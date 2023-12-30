
const typeDefs = `#graphql
  scalar Date

  type Todo {
    id: ID!,
    title: String,
    detail: String,
    createdAt: Date!
  }

  type Query {
    welcome: String,
    getTodos: [Todo]
    getTodo(id:ID): Todo
  }

  type Mutation {
    addTodo (
      title: String, detail: String) : Todo
  }
`;

export default typeDefs;