import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageComponent } from './blog-page.component';
import { MatChipsModule, MatCardModule } from '@angular/material';

describe('BlogPageComponent', () => {
  let component: BlogPageComponent;
  let fixture: ComponentFixture<BlogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatChipsModule, MatCardModule],
      declarations: [BlogPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
