import { ApiClient } from '../ApiClient';
import { User, UserSchema } from '../schemas/UserSchema';
import { Post, PostSchema } from '../schemas/PostSchema';


export class PlaywrightApi {
constructor(
  private readonly apiClient: ApiClient,
  private readonly jsonPlaceholderClient: ApiClient
) {}

  async getHomePage() {
    return this.apiClient.get('/');
  }

 async getUser(userId: number): Promise<User> {
  const response = await this.jsonPlaceholderClient.get(
    `/users/${userId}`
  );

  const data = await response.json();

    return UserSchema.parse(data);
  }
  
  async getUserRaw(userId: number) {
  return this.jsonPlaceholderClient.get(`/users/${userId}`);
}

async createPost(data: {
  title: string;
  body: string;
  userId: number;
}): Promise<{ status: number; post: Post }> {
  const response = await this.jsonPlaceholderClient.post('/posts', data);
  const responseBody = await response.json();
  const post = PostSchema.parse(responseBody);
  return {
    status: response.status(),
    post,
  };
}
}