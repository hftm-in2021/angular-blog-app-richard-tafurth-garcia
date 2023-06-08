import { Component } from '@angular/core';
import { EnvironmentService } from '@app/environment.service';

import { FormBuilder } from '@angular/forms';

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
}
