import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogDetails } from '@app/services/blog-details';
import { BlogService } from '@app/services/blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-details-page',
  templateUrl: './blog-details-page.component.html',
  styleUrls: ['./blog-details-page.component.scss'],
})
export class BlogDetailsPageComponent implements AfterViewInit {
  public blog$!: Observable<BlogDetails>;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    const blogId = Number(this.route.snapshot.paramMap.get('id')) || null;

    if (blogId != null) this.blog$ = this.blogService.getEntry(blogId);
  }
}
