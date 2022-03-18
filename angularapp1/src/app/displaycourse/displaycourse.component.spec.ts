import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycourseComponent } from './displaycourse.component';

describe('DisplaycourseComponent', () => {
  let component: DisplaycourseComponent;
  let fixture: ComponentFixture<DisplaycourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaycourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
