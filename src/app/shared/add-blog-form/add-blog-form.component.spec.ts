import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogFormComponent } from './add-blog-form';

describe('AddBlogFormComponent', () => {
  let component: AddBlogFormComponent;
  let fixture: ComponentFixture<AddBlogFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBlogFormComponent],
    });
    fixture = TestBed.createComponent(AddBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
