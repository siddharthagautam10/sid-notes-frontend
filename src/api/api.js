import axios from 'axios';
import { getToken } from '../services/tokenService';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your actual backend URL
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();//localStorage.getItem('TOKEN_KEY');
    // console.log(token, localStorage.getItem('TOKEN_KEY'))
    if (token) {
      // config.headers.Authorization = `Bearer ${token}`;
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const loginUser = (credentials) => api.post('/auth/login', credentials);
export const registerUser = (userData) => api.post('/auth/register', userData);
export const fetchNotes = () => api.get('/notes');
export const createNote = (noteData) => api.post('/notes', noteData);
export const deleteNote = (noteId) => api.delete(`/notes/${noteId}`);

export default api;