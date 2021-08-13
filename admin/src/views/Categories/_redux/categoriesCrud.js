import axios from 'axios';
import config from '../../../config';
// items => filtered/sorted result
export function findCategories(params) {
  return axios.post(config.WS_BASE_URL + '/category/find', params)
}

export function getCategoriesById(categoryId) {
  return axios.get(config.WS_BASE_URL + `/category/${categoryId}`)
}

export function updateCategory(categoryId, category) {
  return axios.put(config.WS_BASE_URL + `/category/${categoryId}`, category);
}