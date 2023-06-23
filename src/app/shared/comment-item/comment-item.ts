import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Comment } from '@app/schemas/comment';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatBadgeModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  standalone: true,
})
export class CommentItemComponent implements AfterViewInit {
  @Input({ required: true }) comment!: Comment;
  @ViewChild('UserHeaderImage', { static: true })
  headerImage!: ElementRef<HTMLImageElement>;

  ngAfterViewInit(): void {
    this.headerImage.nativeElement.src = `https://api.dicebear.com/6.x/adventurer/svg?seed=${this.comment.author}`;
  }
}
