import { Component, Input } from '@angular/core';
import { BlogStateService } from '@app/services/blog.state.service';

@Component({
  selector: 'app-blog-overview-page',
  templateUrl: './blog-overview-page.component.html',
  styleUrls: ['./blog-overview-page.component.scss'],
})
export class BlogOverviewPageComponent {
  @Input({ required: true }) keyword!: string;

  constructor(public blogStateService: BlogStateService) {}
}
