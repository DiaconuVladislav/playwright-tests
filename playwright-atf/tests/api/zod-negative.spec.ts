import { test, expect } from '@playwright/test';
import { z } from 'zod';

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email()
});

test('Zod should reject invalid user data', async () => {

  const invalidUser = {
    id: 'WRONG',
    name: 123,
    email: 'not-an-email'
  };

  const result = UserSchema.safeParse(invalidUser);

  expect(result.success).toBe(false);

});