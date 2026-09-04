import { ApiClient } from '../ApiClient';
import { User } from '../schemas/UserSchema';

export class PlaywrightApi {
  constructor(
    private readonly apiClient: ApiClient
  ) {}

  async getHomePage() {
    return this.apiClient.get('/');
  }

  async getUser(userId: number): Promise<User> {
    const response = await this.apiClient.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    return response.json();
  }
}