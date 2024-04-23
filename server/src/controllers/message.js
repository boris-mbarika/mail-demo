import { Router } from 'express';
import { Message } from '../models/message.js';
import mongoose from 'mongoose';

const router = Router();

router.get('/', async (req, res) => {
  const toId = req.query.toId;

  let messages;

  if (toId) {
    if (!mongoose.isValidObjectId(toId))
      return res
        .status(400)
        .json({ message: "'toId' must be a valid ObjectId", status: 400 });

    messages = await Message.find({ toId }).exec();
  } else {
    messages = await Message.find();
  }

  res.json(messages);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id))
    return res.status(400).json({ message: 'Invalid ObjectId', status: 400 });

  const message = await Message.findById(id).exec();

  if (!message)
    return res.status(404).json({ message: 'Not Found', status: 404 });

  res.json(message);
});

export const messageController = router;
