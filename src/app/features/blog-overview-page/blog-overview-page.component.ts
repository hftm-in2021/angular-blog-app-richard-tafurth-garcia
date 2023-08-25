import { Component, Input } from '@angular/core';
import { BlogStateService } from '@app/core/services/blog.state.service';
import { SpinnerStateService } from '@app/core/services/spinner.state.service';

@Component({
  selector: 'app-blog-overview-page',
  templateUrl: './blog-overview-page.component.html',
  styleUrls: ['./blog-overview-page.component.scss'],
})
export class BlogOverviewPageComponent {
  @Input({ required: true }) keyword!: string;

  constructor(
    public blogStateService: BlogStateService,
    public spinnerStateService: SpinnerStateService
  ) {}
}
