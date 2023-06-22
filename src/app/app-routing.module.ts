import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'blogs/:id',
    loadChildren: () =>
      import('@features/blog-details-page/blog-details-page.module').then(
        (m) => m.BlogDetailsPageModule
      ), // lazy loaded
  },
  {
    path: '',
    redirectTo: 'blogs',
    pathMatch: 'full',
  },
  {
    path: 'blogs',
    loadChildren: () =>
      import('@features/blog-overview-page/blog-overview-page.module').then(
        (m) => m.BlogOverviewPageModule
      ), // lazy loaded
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
