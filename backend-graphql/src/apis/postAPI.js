import createHTTPClient from './httpClient';

const BASE_URL = 'http://localhost:5002';
const TIMEOUT = 5000;

class MockAPI {
  constructor(baseURL, timeout) {
    this.client = createHTTPClient(baseURL, timeout);
  }

  async getPosts() {
    return this.client.get('/posts');
  }

  async getPost(id) {
    return this.client.get(`/posts/${id}`);
  }

  async getPostsByUser(userId) {
    return this.client.get(`/posts/user/${userId}`);
  }

  async createPost(post) {
    return this.client.post('/posts', post);
  }

  async updatePost(id, post) {
    return this.client.put(`/posts/${id}`, post);
  }

  async deletePost(id) {
    return this.client.delete(`/posts/${id}`);
  }
}

export default new MockAPI(BASE_URL, TIMEOUT);
