import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntituteEnrolledComponent } from './intitute-enrolled.component';

describe('IntituteEnrolledComponent', () => {
  let component: IntituteEnrolledComponent;
  let fixture: ComponentFixture<IntituteEnrolledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntituteEnrolledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntituteEnrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
