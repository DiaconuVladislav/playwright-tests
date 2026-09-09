import { APIRequestContext, APIResponse } from '@playwright/test';
import { Logger } from '../utils/logger';

export class ApiClient {
  constructor(
    private readonly request: APIRequestContext,
    private readonly baseUrl: string
  ) {}

  private buildUrl(url: string): string {
    return new URL(url, this.baseUrl).toString();
  }

  private logResponse(response: APIResponse): void {
    const status = response.status();

    if (response.ok()) {
      Logger.info(`Response: ${status}`);
    } else {
      Logger.error(`Response: ${status}`);
    }
  }

  private async executeRequest(
    method: string,
    url: string,
    request: () => Promise<APIResponse>
  ): Promise<APIResponse> {
    try {
      Logger.info(`${method} ${url}`);

      const response = await request();

      this.logResponse(response);

      return response;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : String(error);

      Logger.error(`${method} ${url} failed: ${message}`);

      throw error;
    }
  }

  async get(url: string): Promise<APIResponse> {
    const fullUrl = this.buildUrl(url);

    return this.executeRequest(
      'GET',
      fullUrl,
      () => this.request.get(fullUrl)
    );
  }

  async post(url: string, data?: unknown): Promise<APIResponse> {
    const fullUrl = this.buildUrl(url);

    return this.executeRequest(
      'POST',
      fullUrl,
      () =>
        this.request.post(fullUrl, {
          data,
        })
    );
  }

  async put(url: string, data?: unknown): Promise<APIResponse> {
    const fullUrl = this.buildUrl(url);

    return this.executeRequest(
      'PUT',
      fullUrl,
      () =>
        this.request.put(fullUrl, {
          data,
        })
    );
  }

  async patch(url: string, data?: unknown): Promise<APIResponse> {
    const fullUrl = this.buildUrl(url);

    return this.executeRequest(
      'PATCH',
      fullUrl,
      () =>
        this.request.patch(fullUrl, {
          data,
        })
    );
  }

  async delete(url: string): Promise<APIResponse> {
    const fullUrl = this.buildUrl(url);

    return this.executeRequest(
      'DELETE',
      fullUrl,
      () => this.request.delete(fullUrl)
    );
  }
}