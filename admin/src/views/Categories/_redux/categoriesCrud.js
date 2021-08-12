import axios from 'axios';
// items => filtered/sorted result
export function findCategories(params) {
  return axios.post('http://localhost:5000/category/find', params)
}

export function getCategoriesById(categoryId) {
  return axios.get(`http://localhost:5000/category/${categoryId}`)
}

export function updateCategory(categoryId, category) {
  return axios.put(`http://localhost:5000/category/${categoryId}`, category);
}