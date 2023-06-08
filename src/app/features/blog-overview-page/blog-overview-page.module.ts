import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogOverviewPageComponent } from '@features/blog-overview-page/blog-overview-page.component';
import { BlogOverviewComponent } from '@app/core/components/blog-overview/blog-overview.component';
import { BlogService } from './services/blog.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [BlogOverviewPageComponent],
  imports: [
    CommonModule,
    BlogOverviewComponent,
    HttpClientModule,
    MatCardModule,
  ],
  exports: [BlogOverviewPageComponent],
  providers: [BlogService],
})
export class BlogOverviewPageModule {}
