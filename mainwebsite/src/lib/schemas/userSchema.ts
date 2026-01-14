import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['STUDENT', 'TEACHER', 'ADMIN']).optional(),
});

export type UserInput = z.infer<typeof userSchema>;
