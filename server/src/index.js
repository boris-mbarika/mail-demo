import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { messageController } from './controllers/message.js';
import cors from 'cors';
import * as path from 'node:path';

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URI, { dbName: process.env.MONGODB_DB_NAME })
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log('DB Connection Error: ', err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/messages', messageController);
app.use('/api*', (req, res) =>
  res.status(404).json({ code: 404, message: `Not found` }),
);

// Serve client content
app.use(express.static(path.join(process.cwd(), 'public')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public/index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
