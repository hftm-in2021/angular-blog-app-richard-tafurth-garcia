import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@app/core/header/header.component';
import { BlogOverviewPageModule } from '@features/blog-overview-page/blog-overview-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BlogDetailsPageModule } from '@features/blog-details-page/blog-details-page.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AuthModule } from 'angular-auth-oidc-client';
import { EnvironmentService } from './environment.service';
import { MatCardModule } from '@angular/material/card';
import { NewBlogPageModule } from './features/add-blog-page/new-blog-page.module';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    BlogDetailsPageModule,
    BlogOverviewPageModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    AuthModule.forRoot({
      config: {
        authority:
          'https://d-cap-keyclaok.kindbay-711f60b2.westeurope.azurecontainerapps.io/realms/blog',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'spa-blog',
        scope: 'openid profile email offline_access blogs',
        responseType: 'code',
        silentRenew: true,
        silentRenewUrl: window.location.origin + '/silent-renew.html',
        renewTimeBeforeTokenExpiresInSeconds: 10,
        secureRoutes: [new EnvironmentService().apiUrl],
      },
    }),
    NewBlogPageModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
