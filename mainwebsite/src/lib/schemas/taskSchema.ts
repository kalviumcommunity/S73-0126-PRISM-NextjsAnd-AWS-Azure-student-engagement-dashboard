import { z } from 'zod';

export const taskSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long'),
  projectId: z.number().int(),
  userId: z.number().int(),
});

export type TaskInput = z.infer<typeof taskSchema>;

