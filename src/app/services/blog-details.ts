import { z } from 'zod';
import { CommentSchema } from './comment';

export const BlogDetailSchema = z.object({
  title: z.string(),
  content: z.string(),
  comments: z.array(CommentSchema),
  author: z.string(),
  likes: z.number(),
  likedByMe: z.boolean(),
});

export type BlogDetails = z.infer<typeof BlogDetailSchema>;
