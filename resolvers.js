import { GraphQLScalarType, Kind } from 'graphql';

////Others
import Todo from './Todo.js';

const resolvers = {

  Query: {
    welcome: () => {
      return "Welcome to here.";
    },

    getTodos: async () => {
      const todos = await Todo.find().exec();
      return todos;
    },

    getTodo: async (parent, args) => {
      const { id} = args
      const todo = await Todo.findById( id ).exec ();
      return todo;
    }
  },

  Mutation: {
    addTodo: async (parent, args) => {
      const { title, detail } = args;
      console.log(args);

      if ( title) {
        throw new Error ( "The todo is existed !!!");
      }
      const newTodo = new Todo({
        title: title,
        detail: detail,
      });
      await newTodo.save();
      return newTodo;
    }
  }
};

export default resolvers;