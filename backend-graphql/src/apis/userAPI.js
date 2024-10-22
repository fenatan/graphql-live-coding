import createHTTPClient from './httpClient';

const BASE_URL = 'http://localhost:5001';
const TIMEOUT = 5000;

class MockAPI {
  constructor(baseURL, timeout) {
    this.client = createHTTPClient(baseURL, timeout);
  }

  async getUsers() {
    return this.client.get('/users');
  }

  async getUser(id) {
    return this.client.get(`/users/${id}`);
  }

  async createUser(user) {
    return this.client.post('/users', user);
  }

  async updateUser(id, user) {
    return this.client.put(`/users/${id}`, user);
  }

  async deleteUser(id) {
    return this.client.delete(`/users/${id}`);
  }
}

export default new MockAPI(BASE_URL, TIMEOUT);
