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

  async getPosts(): Promise<Post[]> {
    const response = await this.jsonPlaceholderClient.get('/posts');

    const responseBody = await response.json();

    return PostSchema.array().parse(responseBody);
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

  async updatePost(
    postId: number,
    data: {
      title: string;
      body: string;
      userId: number;
    }
  ): Promise<{ status: number; post: Post }> {
    const response = await this.jsonPlaceholderClient.put(
      `/posts/${postId}`,
      data
    );

    const responseBody = await response.json();
    const post = PostSchema.parse(responseBody);

    return {
      status: response.status(),
      post,
    };
  }

  async patchPost(
    postId: number,
    data: Partial<{
      title: string;
      body: string;
      userId: number;
    }>
  ): Promise<{ status: number; post: Post }> {
    const response = await this.jsonPlaceholderClient.patch(
      `/posts/${postId}`,
      data
    );

    const responseBody = await response.json();
    const post = PostSchema.parse(responseBody);

    return {
      status: response.status(),
      post,
    };
  }

  async deletePost(postId: number): Promise<number> {
    const response = await this.jsonPlaceholderClient.delete(
      `/posts/${postId}`
    );

    return response.status();
  }
}