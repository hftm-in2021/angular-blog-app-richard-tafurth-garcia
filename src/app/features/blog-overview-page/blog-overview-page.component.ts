import { AfterViewInit, Component, Input } from '@angular/core';
/*import { BlogService } from './services/blog.service';*/
/*import { ArrayBlogOverview } from '@schemas/ArrayBlogOverview';*/
import { ArrayBlogOverview } from '@app/schemas/blog-overview';
import { BlogService } from '@app/services/blog.service';

@Component({
  selector: 'app-blog-overview-page',
  templateUrl: './blog-overview-page.component.html',
  styleUrls: ['./blog-overview-page.component.scss'],
})
export class BlogOverviewPageComponent implements AfterViewInit {
  @Input({ required: true }) keyword!: string;

  public isLoading = true;
  public error?: Error | null = null;
  public blogs!: ArrayBlogOverview;

  constructor(private blogService: BlogService) {}

  ngAfterViewInit(): void {
    this.blogService.getEntries().subscribe({
      next: (blogs: ArrayBlogOverview) => (this.blogs = blogs),
      error: (error: Error) => (this.error = error),
      complete: () => (this.isLoading = false),
    });
  }
}
