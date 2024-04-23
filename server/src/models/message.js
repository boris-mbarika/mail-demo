import mongoose from 'mongoose';
import { messageSchema } from '../schemas/message.js';

export const Message = mongoose.model('messages', messageSchema);
