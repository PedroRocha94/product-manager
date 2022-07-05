import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1/products';

export function getAllProducts(){
  return axios.get(baseUrl + '?isActive=true');
}

export function postProduct(product){
  return axios.post(baseUrl, product);
}

export function editProduct(id, product){
  let url = baseUrl + `/${id}`;
  return axios.put(url, product);
}