import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailsPageComponent } from './blog-details-page.component';
import { BlogItemComponent } from '@app/core/components/blog-overview/blog-item';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { BlogService } from '@app/services/blog.service';
import { Routes, RouterModule } from '@angular/router';

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
  ],
  exports: [BlogDetailsPageComponent, RouterModule],
  providers: [BlogService],
})
export class BlogDetailsPageModule {}
