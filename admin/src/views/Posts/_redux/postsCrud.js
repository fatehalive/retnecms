import axios from 'axios';
// items => filtered/sorted result
export function findPosts(params) {
  return axios.post('http://api.retnecms.com/news-article/find', params)
}

export function getPostsById(postId) {
  return axios.get(`http://api.retnecms.com/news-article/${postId}`)
}

export function updatePost(postId, post) {
  return axios.put(`http://api.retnecms.com/news-article/${postId}`, post);
}