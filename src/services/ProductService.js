import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1/products';

export function getAllProducts(){
  return axios.get(baseUrl);
}

export function postProduct(product){
  return axios.post(baseUrl, product);
}