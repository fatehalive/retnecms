import axios from 'axios';
import config from '../../../config';
// items => filtered/sorted result
export function findPosts(params) {
  return axios.post(config.WS_BASE_URL + '/news-article/find', params)
}

export function getPostsById(postId) {
  return axios.get(config.WS_BASE_URL + `/news-article/${postId}`)
}

export function updatePost(postId, post) {
  return axios.put(config.WS_BASE_URL + `/news-article/${postId}`, post);
}