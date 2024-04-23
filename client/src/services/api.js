import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';

const apiService = axios.create({
  baseURL: isDev ? 'http://localhost:3001/api' : '/api',
});

export const getAllMessages = (userId) =>
  apiService.get(`/messages?toId=${userId}`).then((res) => res.data);

export const getMessageById = (id) =>
  apiService.get(`/messages/${id}`).then((res) => res.data);
