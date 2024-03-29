import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.jjcto.com/',
  timeout: 5000
})

instance.interceptors.request.use(config => {
  return config;
})

instance.interceptors.response.use(response => {
  return response.data;
},error => {
  return error.response.data;
})

export default instance;