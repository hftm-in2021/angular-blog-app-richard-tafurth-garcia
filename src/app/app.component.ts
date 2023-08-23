import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '@app/environment.service';
import { BlogStateService } from '@services/blog.state.service';
import { AuthenticationStateService } from '@core/auth/authentication.state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  apiUrl = '';
  title = 'blog';
  authenticationStateService: AuthenticationStateService;

  constructor(
    environment: EnvironmentService,
    private blogStateService: BlogStateService,
    authenticationStateService: AuthenticationStateService
  ) {
    this.apiUrl = environment.apiUrl;
    this.authenticationStateService = authenticationStateService;
  }

  searchBlogs(keywords: string): void {
    this.blogStateService.searchEntries(keywords);
  }

  manageAuthentication(mustLogin: boolean): void {
    if (mustLogin) this.authenticationStateService.login();
    else this.authenticationStateService.logout();
  }
}
