import { Component, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';
import { Blog } from '@app/models/blog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-overview-page',
  templateUrl: './blog-overview-page.component.html',
  styleUrls: ['./blog-overview-page.component.scss'],
})
export class BlogOverviewPageComponent implements OnInit {
  public blogs?: Observable<Blog[]>;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogs = this.blogService.getEntries();
  }
}
