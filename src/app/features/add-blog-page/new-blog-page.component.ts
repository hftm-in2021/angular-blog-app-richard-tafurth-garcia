import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationStateService } from '@app/core/auth/authentication.state.service';
import { BlogStateService } from '@app/core/services/blog.state.service';
import { SpinnerStateService } from '@app/core/services/spinner.state.service';

@Component({
  selector: 'app-new-blog-page',
  templateUrl: './new-blog-page.component.html',
  styleUrls: ['./new-blog-page.component.scss'],
})
export class NewBlogPageComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public blogStateService: BlogStateService,
    public spinnerStateService: SpinnerStateService,
    private authenticationStateService: AuthenticationStateService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(10)]],
      content: [null, [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(form: FormGroup): void {
    if (form.valid) {
      this.blogStateService.addEntry(
        form.value.title,
        form.value.content,
        this.authenticationStateService.getLoginResponse()
      );
    }
  }

  reset(): void {
    this.form.reset();
  }
}
