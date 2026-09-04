import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  constructor(
    private readonly request: APIRequestContext,
    private readonly baseUrl: string
  ) {}

  private buildUrl(url: string): string {
    return new URL(url, this.baseUrl).toString();
  }

  async get(url: string) {
    return this.request.get(this.buildUrl(url));
  }

  async post(url: string, data?: unknown) {
    return this.request.post(this.buildUrl(url), {
      data,
    });
  }

  async put(url: string, data?: unknown) {
    return this.request.put(this.buildUrl(url), {
      data,
    });
  }

  async patch(url: string, data?: unknown) {
    return this.request.patch(this.buildUrl(url), {
      data,
    });
  }

  async delete(url: string) {
    return this.request.delete(this.buildUrl(url));
  }
}