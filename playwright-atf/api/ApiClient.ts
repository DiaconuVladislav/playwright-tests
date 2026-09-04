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

  async get(url: string) {
    const fullUrl = this.buildUrl(url);

    Logger.info(`GET ${fullUrl}`);

    const response = await this.request.get(fullUrl);

    this.logResponse(response);

    return response;
  }

  async post(url: string, data?: unknown) {
    const fullUrl = this.buildUrl(url);

    Logger.info(`POST ${fullUrl}`);

    const response = await this.request.post(fullUrl, {
      data,
    });

    this.logResponse(response);

    return response;
  }

async put(url: string, data?: unknown) {
  const fullUrl = this.buildUrl(url);

  Logger.info(`PUT ${fullUrl}`);

  const response = await this.request.put(fullUrl, {
    data,
  });

  this.logResponse(response);

  return response;
}

async patch(url: string, data?: unknown) {
  const fullUrl = this.buildUrl(url);

  Logger.info(`PATCH ${fullUrl}`);

  const response = await this.request.patch(fullUrl, {
    data,
  });

  this.logResponse(response);

  return response;
}

async delete(url: string) {
  const fullUrl = this.buildUrl(url);

  Logger.info(`DELETE ${fullUrl}`);

  const response = await this.request.delete(fullUrl);

  this.logResponse(response);

  return response;
}
}