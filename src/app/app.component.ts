import { Component } from '@angular/core';
import { EnvironmentService } from '@app/environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  apiUrl = '';
  title = 'blog';
  searchInput = '';

  constructor(environment: EnvironmentService) {
    this.apiUrl = environment.apiUrl;
  }

  search(event: any): void {
    this.searchInput = event.target.value;
  }
}
