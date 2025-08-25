import { z } from 'zod';

export const todoCategoryEnum = z.enum(['Work','Study','Personal','Other']);

export const createTodoSchema = z.object({
  text: z.string().min(1, 'Text is required').max(200),
  category: todoCategoryEnum.default('Other'),
});

export const updateTodoSchema = z.object({
  text: z.string().min(1).max(200).optional(),
  category: todoCategoryEnum.optional(),
  completed: z.boolean().optional(),
});

export const toggleSchema = z.object({
  id: z.string().min(1),
  completed: z.boolean(),
});

export const bulkToggleSchema = z.object({
  completed: z.boolean(),
});

export const filterQuerySchema = z.object({
  status: z.enum(['all','active','completed']).default('all'),
  category: todoCategoryEnum.optional(),
  q: z.string().optional(),
});
