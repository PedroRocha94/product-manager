import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1';

export function getAllProducts(){
  let url = baseUrl + '/products';
  return axios.get(url);
}