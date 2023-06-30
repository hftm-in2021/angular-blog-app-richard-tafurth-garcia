import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailsPageComponent } from './blog-details-page.component';
import { BlogItemComponent } from '@app/shared/blog-overview/blog-item';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { BlogService } from '@app/services/blog.service';
import { Routes, RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommentItemComponent } from '@app/shared/comment-item/comment-item';

const routes: Routes = [
  {
    path: '',
    component: BlogDetailsPageComponent,
  },
];

@NgModule({
  declarations: [BlogDetailsPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    BlogItemComponent,
    RouterModule.forChild(routes),
    CommentItemComponent,
    MatProgressSpinnerModule,
  ],
  exports: [BlogDetailsPageComponent, RouterModule],
  providers: [BlogService],
})
export class BlogDetailsPageModule {}
