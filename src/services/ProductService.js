import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1/products';

export function getAllProducts(isActive){
  let url = baseUrl + `?isActive=${isActive}`;
  return axios.get(url);
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

export function getProductById(id){
  let url = baseUrl + `/${id}`;
  return axios.get(url);
}

export function inactiveProduct(id){
  let url = baseUrl + `/${id}/inactive`;
  return axios.patch(url);
}

export function activeProduct(id){
  let url = baseUrl + `/${id}/active`;
  return axios.patch(url);
}