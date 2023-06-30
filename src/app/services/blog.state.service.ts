import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArrayBlogOverview } from './blog-overview';
import { StateService } from './state.service';
import { BlogService } from './blog.service';
import { BlogDetails } from './blog-details';

interface BlogState {
  blogs: ArrayBlogOverview;
  selectedBlog: BlogDetails | null;
  isLoading: boolean;
  error: Error | null;
  isEmpty: boolean;
}

const initialState: BlogState = {
  blogs: [],
  selectedBlog: null,
  isLoading: true,
  error: null,
  isEmpty: true,
};

@Injectable({
  providedIn: 'root',
})
export class BlogStateService extends StateService<BlogState> {
  blogs$: Observable<ArrayBlogOverview> = this.select((state) => state.blogs);
  isLoading$: Observable<boolean> = this.select((state) => state.isLoading);
  error$: Observable<Error | null> = this.select((state) => state.error);
  isEmpty$: Observable<boolean> = this.select((state) => state.isEmpty);
  selectedBlog$: Observable<BlogDetails | null> = this.select(
    (state) => state.selectedBlog
  );

  constructor(private blogService: BlogService) {
    super(initialState);
    this.getEntries();
  }

  public getEntries(): void {
    this.setLoading(true);
    this.blogService.getEntries().subscribe({
      next: (blogs: ArrayBlogOverview) => {
        this.setState({ blogs });
        this.setEmpty(false);
      },
      error: (error: Error) => this.setError(error),
      complete: () => this.setLoading(false),
    });
  }

  public getEntry(blogId: number): void {
    this.setLoading(true);
    this.blogService.getEntry(blogId).subscribe({
      next: (blog: BlogDetails) => {
        this.setSelectedBlog(blog);
        this.setEmpty(false);
      },
      error: (error: Error) => this.setError(error),
      complete: () => this.setLoading(false),
    });
  }

  private setLoading(loading: boolean): void {
    this.setState({ isLoading: loading });
  }

  private setError(error: Error | null): void {
    this.setState({ error });
  }

  private setEmpty(empty: boolean): void {
    this.setState({ isEmpty: empty });
  }

  private setSelectedBlog(blog: BlogDetails): void {
    this.setState({ selectedBlog: blog });
  }
}
