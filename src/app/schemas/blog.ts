import { z } from 'zod';

export const BlogSchema = z.object({
  id: z.number(),
  title: z.string(),
  contentPreview: z.string(),
  author: z.string(),
  likes: z.number(),
  comments: z.number(),
  likedByMe: z.boolean(),
  createdByMe: z.boolean(),
});

export const ArrayBlogSchema = z.array(BlogSchema);

export type Blog = z.infer<typeof BlogSchema>;
export type ArrayBlog = z.infer<typeof ArrayBlogSchema>;
