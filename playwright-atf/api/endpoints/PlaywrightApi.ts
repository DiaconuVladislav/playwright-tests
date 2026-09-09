import { BaseApi } from '../base/BaseApi';
import { ApiClient } from '../ApiClient';
import { ResponseValidator } from '../validators/ResponseValidator';
import { User, UserSchema } from '../schemas/UserSchema';
import { Post, PostSchema } from '../schemas/PostSchema';

export class PlaywrightApi extends BaseApi {
  constructor(
    apiClient: ApiClient,
    jsonPlaceholderClient: ApiClient
  ) {
    super(jsonPlaceholderClient);
  }

  async getHomePage() {
    return this.apiClient.get('/');
  }

  async getUser(userId: number): Promise<User> {
    const response = await this.get(`/users/${userId}`);

    return ResponseValidator.validate(
      response,
      UserSchema
    );
  }

  async getUserRaw(userId: number) {
    return this.get(`/users/${userId}`);
  }

  async getPosts(): Promise<Post[]> {
    const response = await this.get('/posts');

    return ResponseValidator.validate(
      response,
      PostSchema.array()
    );
  }

  async createPost(data: {
    title: string;
    body: string;
    userId: number;
  }): Promise<{ status: number; post: Post }> {
    const response = await this.post('/posts', data);

    const post = await ResponseValidator.validate(
      response,
      PostSchema
    );

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
    const response = await this.put(
      `/posts/${postId}`,
      data
    );

    const post = await ResponseValidator.validate(
      response,
      PostSchema
    );

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
    const response = await this.patch(
      `/posts/${postId}`,
      data
    );

    const post = await ResponseValidator.validate(
      response,
      PostSchema
    );

    return {
      status: response.status(),
      post,
    };
  }

  async deletePost(postId: number): Promise<number> {
    const response = await this.delete(
      `/posts/${postId}`
    );

    return response.status();
  }
}