import mongoose, { Mongoose } from 'mongoose';

export const messageSchema = new mongoose.Schema({
  content: String,
  subject: String,
  isRead: Boolean,
  fromId: mongoose.Schema.Types.ObjectId,
  toId: mongoose.Schema.Types.ObjectId,
});
