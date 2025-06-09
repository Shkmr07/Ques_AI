import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default api;