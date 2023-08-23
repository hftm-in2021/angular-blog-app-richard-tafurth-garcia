import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogStateService } from '@app/core/services/blog.state.service';

@Component({
  selector: 'app-blog-details-page',
  templateUrl: './blog-details-page.component.html',
  styleUrls: ['./blog-details-page.component.scss'],
})
export class BlogDetailsPageComponent implements AfterViewInit {
  constructor(
    public blogStateService: BlogStateService,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    const blogId = Number(this.route.snapshot.paramMap.get('id')) || null;

    if (blogId != null) this.blogStateService.getEntry(blogId);
  }
}
