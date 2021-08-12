import axios from 'axios';
// items => filtered/sorted result
export function findPosts(params) {
  return axios.post('http://localhost:5000/news-article/find', params)
}

export function getPostsById(postId) {
  return axios.get(`http://localhost:5000/news-article/${postId}`)
}

export function updatePost(postId, post) {
  return axios.put(`http://localhost:5000/news-article/${postId}`, post);
}