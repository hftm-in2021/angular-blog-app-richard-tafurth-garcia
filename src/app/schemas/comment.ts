import { z } from 'zod';

export const CommentSchema = z.object({
  content: z.string(),
  date: z.date(),
  author: z.string(),
});

export const ArrayCommentSchema = z.array(CommentSchema);

export type Comment = z.infer<typeof CommentSchema>;
export type ArrayComment = z.infer<typeof ArrayCommentSchema>;
