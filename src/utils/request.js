import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.jjcto.com/',
  timeout: 5000
})

instance.interceptors.request(config => {
  return config;
})

instance.interceptors.response(response => {
  return response;
})

export default instance;