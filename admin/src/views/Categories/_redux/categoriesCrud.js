import axios from 'axios';
// items => filtered/sorted result
export function findCategories(params) {
  return axios.post('http://api.retnecms.com/category/find', params)
}

export function getCategoriesById(categoryId) {
  return axios.get(`http://api.retnecms.com/category/${categoryId}`)
}

export function updateCategory(categoryId, category) {
  return axios.put(`http://api.retnecms.com/category/${categoryId}`, category);
}