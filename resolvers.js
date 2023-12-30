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
      const { id } = args;
      const todo = await Todo.findById(id).exec();
      return todo;
    }
  },

  Mutation: {
    addTodo: async (parent, args) => {
      const { title, detail } = args;
      console.log(args);

      const existingTodo = await Todo.findOne ({ title}).exec();
      if (existingTodo) {
        throw new Error("The todo is existed !!!");
      }
      const newTodo = new Todo({
        title: title,
        detail: detail,
      });
      await newTodo.save();
      return newTodo;
    },

    deleteTodo: async (parent, args) => {
      const { id } = args;

      console.log(id);

      if (!id) {
        throw new Error("The todo's id is required!!!");
      }

      const todo = await Todo.findById(id).exec();
      if (!todo) {
        throw new Error("The todo is not existed !!!");
      }
      const deletedTodo = await Todo.findByIdAndDelete(id);
      return deletedTodo;
    },

    // deleteAll: async () => {
    //   await Todo.deleteMany().exec();
    //   return;
    // },

    updateTodo: async (parent, args) => {
      const { id, title, detail } = args;

      console.log(args);

      if (!id) {
        throw new Error("The todo's id is required!!!");
      }

      const todo = await Todo.findById(id).exec();
      if (!todo) {
        throw new Error("The todo is not existed !!!");
      }
      const updateTodo = await Todo.findByIdAndUpdate(id, {
        title: title,
        detail: detail
      });
      return updateTodo;
    },
  }
};

export default resolvers;