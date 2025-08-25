import mongoose, { Schema, models } from 'mongoose';

const TodoSchema = new Schema({
  userId: { type: String, required: true, index: true },
  text: { type: String, required: true },
  category: { type: String, default: 'Other', index: true },
  completed: { type: Boolean, default: false, index: true },
}, { timestamps: true });

export const Todo = models.Todo || mongoose.model('Todo', TodoSchema);
