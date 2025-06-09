import axios from "axios";

const api = axios.create({
  baseURL: 'https://ques-ai-4cj4.onrender.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default api;