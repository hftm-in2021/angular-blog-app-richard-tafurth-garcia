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

import { BlogOverview } from '@app/schemas/blog-overview';
import { BlogDetails } from '@app/schemas/blog-details';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  imports: [
    MatBadgeModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  styleUrls: ['./blog-item.component.scss'],
  standalone: true,
})
export class BlogItemComponent implements AfterViewInit {
  @Input({ required: true }) blog!: BlogOverview | BlogDetails;
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

  getContent(): string {
    if ((this.blog as BlogOverview).contentPreview !== undefined) {
      return (this.blog as BlogOverview).contentPreview;
    } else {
      return (this.blog as BlogDetails).content;
    }
  }

  countComments(): number {
    if ((this.blog as BlogOverview).contentPreview !== undefined) {
      return (this.blog as BlogOverview).comments;
    } else {
      return (this.blog as BlogDetails).comments.length;
    }
  }
}
