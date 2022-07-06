import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1/products';

export function getAllProducts(isActive){
  return axios.get(baseUrl + `?isActive=${isActive}`);
}

export function postProduct(product){
  return axios.post(baseUrl, product);
}

export function editProduct(id, product){
  let url = baseUrl + `/${id}`;
  return axios.put(url, product);
}

export function deleteProduct(id){
  let url = baseUrl + `/${id}`;
  return axios.delete(url);
}

export function inactiveProduct(id){
  let url = baseUrl + `/${id}/inactive`;
  return axios.patch(url);
}

export function activeProduct(id){
  let url = baseUrl + `/${id}/active`;
  return axios.patch(url);
}