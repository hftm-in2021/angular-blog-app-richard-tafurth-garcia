import { z } from 'zod';

export const NewBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export type NewBlog = z.infer<typeof NewBlogSchema>;
