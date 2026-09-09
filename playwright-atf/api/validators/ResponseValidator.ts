import { APIResponse } from '@playwright/test';
import { z } from 'zod';

export class ResponseValidator {
  static async validate<T>(
    response: APIResponse,
    schema: z.ZodType<T>
  ): Promise<T> {
    const contentType = response.headers()['content-type'];

    if (!contentType?.includes('application/json')) {
      throw new Error(
        `Expected JSON response but received: ${
          contentType || 'unknown content type'
        }`
      );
    }

    const body = await response.json();

    return schema.parse(body);
  }
}