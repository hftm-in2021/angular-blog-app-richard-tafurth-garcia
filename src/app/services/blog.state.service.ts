import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArrayBlogOverview } from './blog-overview';
import { StateService } from './state.service';
import { BlogService } from './blog.service';

interface BlogState {
  blogs: ArrayBlogOverview;
  isLoading: boolean;
  error: Error | null;
  isEmpty: boolean;
}

const initialState: BlogState = {
  blogs: [],
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

  constructor(private blogService: BlogService) {
    super(initialState);
    this.getEntries();
  }

  private getEntries(): void {
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

  private setLoading(loading: boolean): void {
    this.setState({ isLoading: loading });
  }

  private setError(error: Error | null): void {
    this.setState({ error });
  }

  private setEmpty(empty: boolean): void {
    this.setState({ isEmpty: empty });
  }
}
