import { APIResponse } from '@playwright/test';
import { ApiClient } from '../ApiClient';

export abstract class BaseApi {
  constructor(
    protected readonly apiClient: ApiClient
  ) {}

  protected get(url: string): Promise<APIResponse> {
    return this.apiClient.get(url);
  }

  protected post(url: string, data?: unknown): Promise<APIResponse> {
    return this.apiClient.post(url, data);
  }

  protected put(url: string, data?: unknown): Promise<APIResponse> {
    return this.apiClient.put(url, data);
  }

  protected patch(url: string, data?: unknown): Promise<APIResponse> {
    return this.apiClient.patch(url, data);
  }

  protected delete(url: string): Promise<APIResponse> {
    return this.apiClient.delete(url);
  }
}