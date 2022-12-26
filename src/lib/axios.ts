import axios from 'axios';

// get current url from vercel env
const domain =
  process.env.NODE_ENV === 'production'
    ? process.env.VERCEL_URL
    : 'http://localhost:3000';

const api = axios.create({
  baseURL: domain,
});

export default api;
