import { z } from 'zod';

export const BlogOverViewSchema = z.object({
  id: z.number(),
  title: z.string(),
  contentPreview: z.string(),
  author: z.string(),
  likes: z.number(),
  comments: z.number(),
  likedByMe: z.boolean(),
  createdByMe: z.boolean(),
});

export const ArrayBlogOverviewSchema = z.array(BlogOverViewSchema);

export type BlogOverview = z.infer<typeof BlogOverViewSchema>;
export type ArrayBlogOverview = z.infer<typeof ArrayBlogOverviewSchema>;
