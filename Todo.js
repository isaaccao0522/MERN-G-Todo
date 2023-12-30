import { Schema, model } from 'mongoose';

const TodoSchema = new Schema ({
  title: {
    type: String,
    require: true
  },
  detail:String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
})

const Todo = model( "Todo", TodoSchema);
export default Todo;