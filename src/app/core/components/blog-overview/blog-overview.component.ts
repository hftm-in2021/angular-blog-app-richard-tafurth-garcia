import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { Blog } from '@app/models/blog';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  imports: [
    MatBadgeModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  styleUrls: ['./blog-overview.component.scss'],
  standalone: true,
})
export class BlogOverviewComponent implements AfterViewInit {
  @Input({ required: true }) blog!: Blog;
  @ViewChild('UserHeaderImage', { static: true })
  headerImage!: ElementRef<HTMLImageElement>;

  ngAfterViewInit(): void {
    this.headerImage.nativeElement.src = `https://api.dicebear.com/6.x/adventurer/svg?seed=${this.blog?.author}`;
  }

  toggleFavorite(): void {
    this.blog.likedByMe = !this.blog.likedByMe;
    if (this.blog.likedByMe) this.blog.likes += 1;
    else this.blog.likes -= 1;
  }
}
