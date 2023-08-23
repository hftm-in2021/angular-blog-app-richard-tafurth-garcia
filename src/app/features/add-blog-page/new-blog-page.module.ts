import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBlogPageComponent } from './new-blog-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BlogService } from '@app/core/services/blog.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: NewBlogPageComponent,
  },
];

@NgModule({
  declarations: [NewBlogPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ],
  exports: [NewBlogPageComponent, RouterModule],
  providers: [BlogService],
})
export class NewBlogPageModule {}
