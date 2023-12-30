
const typeDefs = `#graphql
  scalar Date

  type Todo {
    id: ID!,
    title: String,
    detail: String,
    createdAt: Date!
    updatedAt: Date
  }

  type Query {
    welcome: String,
    getTodos: [Todo]
    getTodo(id:ID): Todo
  }

  type Mutation {
    addTodo (
      title: String, detail: String) : Todo

    deleteTodo ( id:ID): Todo
    # deleteAll:[Todo]
  
    updateTodo ( id:ID, title: String, detail: String, updatedAt: Date): Todo
  }
`;

export default typeDefs;