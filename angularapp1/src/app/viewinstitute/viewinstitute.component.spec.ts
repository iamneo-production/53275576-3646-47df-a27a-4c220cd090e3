import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinstituteComponent } from './viewinstitute.component';

describe('ViewinstituteComponent', () => {
  let component: ViewinstituteComponent;
  let fixture: ComponentFixture<ViewinstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewinstituteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewinstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
