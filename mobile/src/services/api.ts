import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.102:3333',
});

export default api;

// exp://ta-6f7.anonymous.mobile.exp.direct:80