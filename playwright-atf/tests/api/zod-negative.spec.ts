import { test, expect } from '../../fixtures/test.fixture';
import { UserSchema } from '../../api/schemas/UserSchema';

test.describe('Zod Negative Tests', () => {

  test('GET user should fail Zod validation with invalid data', async ({ playwrightApi }) => {

    const response = await playwrightApi.getUserRaw(1);

    expect(response.status()).toBe(200);

    const data = await response.json();

    // Intentionally modify API response
    const invalidUser = {
      ...data,
      id: 'WRONG'
    };

    const result = UserSchema.safeParse(invalidUser);

    expect(result.success).toBe(false);

  });

});