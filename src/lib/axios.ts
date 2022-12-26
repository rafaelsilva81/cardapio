import axios from 'axios';

// get current url from vercel env
const current_url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const api = axios.create({
  baseURL: current_url,
});

export default api;
