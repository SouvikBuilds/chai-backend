import mongoose from "mongoose";
import { User } from "./user.models";
import { subTodo } from "./sub_todo.models";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: subTodo,
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
