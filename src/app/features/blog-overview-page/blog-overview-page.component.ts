import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { BlogService } from './services/blog.service';
import { ArrayBlog } from '@app/schemas/blog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-overview-page',
  templateUrl: './blog-overview-page.component.html',
  styleUrls: ['./blog-overview-page.component.scss'],
})
export class BlogOverviewPageComponent implements AfterViewInit, OnChanges {
  @Input({ required: true }) keyword!: string;

  public blogs$?: Observable<ArrayBlog>;

  constructor(private blogService: BlogService) {}

  ngAfterViewInit(): void {
    this.blogs$ = this.blogService.getEntries();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['keyword'])
      this.blogs$ = this.blogService.searchEntries(
        changes['keyword'].currentValue
      );
  }
}
