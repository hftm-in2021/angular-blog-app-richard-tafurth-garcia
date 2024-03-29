import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogOverviewPageComponent } from '@features/blog-overview-page/blog-overview-page.component';
import { BlogItemComponent } from '@app/shared/blog-overview/blog-item';
import { BlogService } from '@app/core/services/blog.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlogOverviewPageComponent,
  },
];

@NgModule({
  declarations: [BlogOverviewPageComponent],
  imports: [
    CommonModule,
    BlogItemComponent,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),
  ],
  exports: [BlogOverviewPageComponent, RouterModule],
  providers: [BlogService],
})
export class BlogOverviewPageModule {}
