import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your actual backend URL
});

export const loginUser = (credentials) => api.post('/auth/login', credentials);
export const registerUser = (userData) => api.post('/auth/register', userData);
export const fetchNotes = () => api.get('/notes');
export const createNote = (noteData) => api.post('/notes', noteData);
export const deleteNote = (noteId) => api.delete(`/notes/${noteId}`);

export default api;
