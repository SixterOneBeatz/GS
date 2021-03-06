import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;

export const httpClient = {
  get(url, config) {
    return axios.get(url, config);
  },
  post(url, body, config) {
    return axios.post(url, body, config);
  },
  put(url, body, config) {
    return axios.put(url, body, config);
  },
  delete(url, config) {
    return axios.delete(url, config);
  },
};
