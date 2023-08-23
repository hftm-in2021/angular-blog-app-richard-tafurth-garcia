import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBlogPageComponent } from './new-blog-page.component';

@NgModule({
  declarations: [NewBlogPageComponent],
  imports: [CommonModule],
  exports: [NewBlogPageComponent],
})
export class AddBlogPageModule {}
