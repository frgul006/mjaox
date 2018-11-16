import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FileIconComponent } from './file-icon.component';

describe('FileIconComponent', () => {
  let component: FileIconComponent;
  let fixture: ComponentFixture<FileIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MatIconModule],
      declarations: [FileIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
