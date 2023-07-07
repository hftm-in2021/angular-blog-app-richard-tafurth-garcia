import { Component } from '@angular/core';
import { EnvironmentService } from '@app/environment.service';
import { BlogDetailSchema } from './core/services/blog-details';
import { BlogStateService } from './core/services/blog.state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  apiUrl = '';
  title = 'blog';

  blogStateService: BlogStateService;

  constructor(
    environment: EnvironmentService,
    blogStateService: BlogStateService
  ) {
    this.apiUrl = environment.apiUrl;
    this.blogStateService = blogStateService;
  }

  searchBlogs(keywords: string): void {
    this.blogStateService.searchEntries(keywords);
  }
}
